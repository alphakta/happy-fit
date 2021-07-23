<?php
include_once "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo 'ok';
    $sql="INSERT INTO test (n, texte) VALUES (10, 'POST');";
    $post_data_query = mysqli_query($conn, $sql);
}

?>