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
            id,
            type,
            description,
            thumbnail_path
        FROM guide_types 
        ORDER BY type;
EOT;

    $result = mysqli_query($dbc, $query);

    $response = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = ['id' => $row['id'], 'type' => $row['type'], 'thumbnail_path' => $row['thumbnail_path'], 'description' => $row['description']];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>

