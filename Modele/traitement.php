<?php

require_once('../Modele/connect.php');



$mail = $_POST["mail"];

$password = sha1($_POST["motdepasse"]);



// echo 'mail : '.$mail.'<br>';

// echo 'mdp hashé: '.$password.'<br>';

$trouveMail = false;
$trouveMdp = false;
$chercheMail="SELECT mail FROM utilisateur";

$p1 = $co->query($chercheMail);

	while ($row = $p1->fetch_assoc() )  

	{

        if($row['mail'] == $mail) {

            $trouveMail = true;

        }

	}



$cherchePassword="SELECT mdp FROM utilisateur WHERE mail='$mail'";

$p2 = $co->query($cherchePassword);

	while ($row2 = $p2->fetch_assoc() )  

	{

        if($row2['mdp'] == $password) {

            // echo $row2['mdp'];

            $trouveMdp = true;

        }

	}



$chercheId="SELECT IDutilisateur FROM utilisateur WHERE mail='$mail'";

$p3 = $co->query($chercheId);

    while ($row3 = $p3->fetch_assoc() )  

    {

            $userID = $row3['IDutilisateur'];

            $trouveID = true;

    }



if($trouveMail && $trouveMdp) {

    setcookie('IDuser',$userID,time() + 365*24*3600,'/');

    header("Location: ../Vue/index2_c.html");

}

else {
}




?>

<script>
    var mail = (<?= json_encode($trouveMail); ?>);
    var mdp = (<?= json_encode($trouveMdp); ?>);
    console.log(mail);
    console.log(mdp);
    if(mail == false || mdp == false){

        var r = confirm("mot de passe ou identifiant incorrect ! cliquez ok pour etre redirigez vers la page d'inscription et annuler pour aller a la page connexion");
         if (r == true) {
            document.location.href="../Vue/inscription.html"
              } 
              else {
                document.location.href="../Vue/connexion.html"
           }
    }
  
    
</script>