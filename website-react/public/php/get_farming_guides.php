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
            content.link
        FROM content
            INNER JOIN content_tags ON content.id = content_tags.content_id
            INNER JOIN tags on content_tags.id = tags.id
        WHERE content.type = 'GUIDE'
        AND tags.name = 'FARMING'
        ORDER BY content.posted_at DESC;
EOT;

    $result = mysqli_query($dbc, $query);

    $response = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = [
            'id'                => $row['id'],
            'title'             => $row['title'],
            'thumbnail_path'    => $row['thumbnail_path'],
            'description'       => $row['description'],
            'author'            => $row['author'],
            'posted_at'         => $row['posted_at'],
            'link_to'           => $row['link']
        ];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>


