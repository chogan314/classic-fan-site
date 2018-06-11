<?php
require_once('mysqli_connect.php');

function sanitizeInput($input, $dbc) {
    $input = strip_tags(trim($input));
    $input = str_replace(array("\r", "\n"), array(" ", " "), $input);
    $input = $dbc->real_escape_string($input);
    return $input;
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $query = <<<EOT
        SELECT
            content.id,
            content.title,
            content.author,
            content.thumbnail_path,
            content.description,
            content.posted_at,
            dungeons.name
        FROM content
            INNER JOIN content_dungeons ON content.id = content_dungeons.content_id
            INNER JOIN dungeons on content_dungeons.dungeon_id = dungeons.id
        WHERE content.type = 'GUIDE'
        ORDER BY dungeons.name ASC, content.posted_at DESC;
EOT;

    $result = mysqli_query($dbc, $query);

    $response = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = [
            'id'                => $row['id'],
            'title'             => $row['title'],
            'thumbnail_path'    => $row['thumbnail_path'],
            'description'       => $row['description'],
            'type'              => $row['name'],
            'author'            => $row['author'],
            'posted_at'         => $row['posted_at']
        ];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>


