<?php
include_once "config.php";
$sql = "SELECT * FROM Test";
$get_data_query = mysqli_query($conn, $sql);
$insert = "";
//echo mysqli_error($conn);
//var_dump($get_data_query);
//echo "\n";
//echo $get_data_query;
//echo "\n"
foreach ($get_data_query as $row) {
    echo $row["texte"];
}
?>  ?>