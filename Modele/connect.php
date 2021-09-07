
<?php
    $host = "localhost"; // ou 127.0.0.1
    $user = "happyfit-2021";
    $bdd = "happyfit-2021"; // le nom de votre base de données
    $passwd = "YWgkhmebfF2Z8Ol4";
    $co = mysqli_connect($host , $user , $passwd, $bdd) or
    die("erreur de connexion");
?>
