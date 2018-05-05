<?php
require_once('mysqli_connect.php');

function sanitizeInput($input, $dbc) {
    $input = strip_tags(trim($input));
    $input = str_replace(array("\r", "\n"), array(" ", " "), $input);
    $input = $dbc->real_escape_string($input);
    return $input;
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $pageSize = sanitizeInput($_GET["pageSize"], $dbc);
    $offset = $pageSize * sanitizeInput($_GET["page"], $dbc);

    $query = <<<EOT
        SELECT
            id,
            title,
            author,
            thumbnail_path,
            description,
            posted_at 
        FROM content
        WHERE type = 'ARTICLE'
        ORDER BY posted_at
        LIMIT {$pageSize}
        OFFSET {$offset};
EOT;

    $result = mysqli_query($dbc, $query);

    $response = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = ['id' => $row['id'],
        'title' => $row['title'],
        'author' => $row['author'],
        'thumbnail_path' => $row['thumbnail_path'],
        'description' => $row['description'],
        'posted_at' => $row['posted_at']];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>


