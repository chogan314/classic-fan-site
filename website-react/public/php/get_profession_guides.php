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
            content.link,
            professions.name,
            professions.type
        FROM content
            INNER JOIN content_professions ON content.id = content_professions.content_id
            INNER JOIN professions on content_professions.profession_id = professions.id
        WHERE content.type = 'GUIDE'
        ORDER BY professions.name ASC, content.posted_at DESC;
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
            'posted_at'         => $row['posted_at'],
            'link'              => $ro['link'],
            'profession_type'   => $row['type']            
        ];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>


