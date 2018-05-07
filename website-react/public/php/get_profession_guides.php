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
            professions.name
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
            'id' => $row['id'],
            'title' => $row['title'],
            'author' => $row['author'],
            'thumbnail_path' => $row['thumbnail_path'],
            'description' => $row['description'],
            'posted_at' => $row['posted_at'],
            'professionName' => $row['name']
        ];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>


