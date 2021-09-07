<?php
require_once('../Modele/connect.php');

$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$mail = $_POST["e-mail"];
$mail2 = $_POST["e-mail2"];
$mdp = sha1($_POST["mdp"]);
$mdp2 = $_POST["mdp2"];
$taille = $_POST["taille"];
$poids = $_POST["poids"];
$sexe = $_POST["sexe"];
$date = $_POST["date"];
$type = $_POST["type2"];
$point = 0;

$sql="SELECT mail FROM utilisateur";
$p1 = $co->query($sql);
	while ($row = $p1->fetch_assoc() )  
	{
        if($mailee=$row['mail'] == $mail) {
            $trouveMail = true;
        }
	}

if(!$trouveMail) {
    $req= "INSERT INTO utilisateur (IDutilisateur,nom,prenom,mail,mdp,taille,poids,sexe,dateNaissance,typeUtilisateur,pointUtilisateur)  
    VALUES (null,'$nom','$prenom','$mail','$mdp','$taille','$poids','$sexe','$date','$type','$point')";
    $co->query($req);
    header("Location: ../Vue/connexion.html");
}



?>

<script>
    var mailTrouvé = (<?= json_encode($trouveMail); ?>);
    if(mailTrouvé){

        var r = confirm("l'adresse insérée est déja prise ! cliquez ok pour etre redirigez vers la page d'inscription et annuler pour aller a l'acceuil");
         if (r == true) {
            document.location.href="../Vue/inscription.html"
              } 
              else {
                document.location.href="../Vue/index2.html"
           }
    }
  
    
</script>