<?php
include_once "config.php";

//echo 'GET';
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    //echo 'GET';
    /*
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode( '?', $uri );
    */
    $sql = $_GET['sql'];
    /*
    $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
    $arr = array('a' => $sql);
*/
    $arr = array();
    $result = mysqli_query($conn, $sql);

    foreach($result as $row) {
        $arr[]=$row;
    }
    echo json_encode($arr);

}

?>
