<?php
require_once('mysqli_connect.php');

function sanitizeInput($input, $dbc) {
    $input = strip_tags(trim($input));
    $input = str_replace(array("\r", "\n"), array(" ", " "), $input);
    $input = $dbc->real_escape_string($input);
    return $input;
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $link = sanitizeInput($_GET(["link"]), $dbc);

    $query = <<<EOT
        SELECT
            posted_at,
            edited_at
        FROM content
        WHERE link = {$link}
EOT;

    $result = mysqli_query($dbc, $query);

    $response = [];

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $response[] = [
            'posted_at' => $row['posted_at'],
            'edited_at' => $row['edited_at']
        ];
    }

    echo json_encode($response);
}

mysqli_close($dbc);
?>


