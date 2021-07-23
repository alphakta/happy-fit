<?php

include_once "config.php";

/*
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');
*/

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents("php://input");
    $data = json_decode($json);

    foreach ($data as $key => $value) {
        foreach ($value as $key2 => $value2) {
            $attributs = "";
            $values = "";
            foreach ($value2 as $key3 => $value3) {
                $attributs = $attributs . $key3 . ",";
                $type = gettype($value3);
                if ($type == "string") {
                    $values = $values . "'" . $value3 . "',";
                } else {
                    $values = $values . $value3 . ",";
                }
            }
            $attributs = substr($attributs, 0, -1);
            $values = substr($values, 0, -1);
            $insert =
                "INSERT INTO " .
                $key .
                " (" .
                $attributs .
                ") VALUES (" .
                $values .
                ");";
            echo "<br>" . $insert;
            $post_data_query = mysqli_query($conn, $insert);
        }
    }
} else {
    /*
    $json='{
    "Utilisateur":
    [
    {
    "nom": "MARTIN",
    "prenom": "Jean",
    "age": 1
    },
    {
    "nom": "LOUIS",
    "prenom": "Jean",
    "age": 10
    }
    ],
    "produit":
    [
    {
    "nb": 5,
    "nom": "oui"
    }
    ]
    }';
    $json2='{"table": "Utilisateur",
    "table2": "Utilisateur"}';
    */
    $json = '{"test":[{"n":20,"texte":"INSERT"}]}';
    echo $json;
    $data = json_decode($json);
    echo 'json :<br>';
    var_dump($data);
    foreach($data as $key => $value) {
    foreach($value as $key2 => $value2) {
    $attributs="";
    $values="";
    foreach($value2 as $key3 => $value3) {
    $attributs=$attributs.$key3.',';
    $type=gettype($value3);
    if($type=="string") {
    $values=$values."'".$value3."',";
    } else {
    $values=$values.$value3.',';
    }
    //echo '<br><br>'.$value3;
    }
    $attributs=substr($attributs, 0, -1);
    $values=substr($values, 0, -1);
    $insert = "INSERT INTO ".$key." (".$attributs.") VALUES (".$values.");";
    echo '<br>'.$insert;
    $post_data_query = mysqli_query($conn, $insert);
    echo mysqli_error($conn);
    }

    }

}



?>