
<?php
require_once('../Modele/connect.php');

$idUtilisateur=$_COOKIE['IDuser'];
$sql="SELECT * FROM utilisateur WHERE IDutilisateur='$idUtilisateur'";
$p1 = $co->query($sql);
	while ($row = $p1->fetch_assoc() )  
	{
		$nom=$row['nom'];
		$prenom=$row['prenom'];
        $mail=$row['mail'];
		$mdp=$row['mdp'];
        $taille=$row['taille'];
        $poids=$row['poids'];
        $sexe=$row['sexe'];
        $date=$row['dateNaissance'];
        $type=$row['typeUtilisateur'];
        $point=$row['pointUtilisateur'];
	}
?>


<!DOCTYPE html>
<html lang="FR">

<head>
    <meta charset="utf-8">

    <link rel="stylesheet" href="../css/styleEspaceMembre.css">
	<meta name="viewport" content="width=device-width">
	<script src="app.js"></script>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link rel="manifest" href="manifest.webmanifest">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" type="text/css" href="src/pushbar.css">
	<link rel="stylesheet" type="text/css" href="src/index-css.css">
    <script src="http://code.jquery.com/jquery-3.5.1.js"> </script>


</head>


<body>
<!-- navigation -->
	<aside data-pushbar-id="left" data-pushbar-direction="left">
		<div class="titleBar">
			<span data-pushbar-close class="close push_right">
			</span>
			<a href="index.html"> Happy'Fit </a>
		</div>

		<ul class="menu">
		<li><a href="#about">Inscription</a></li>
		<li><a href="#prod">Connexion</a></li>
		<li><a href="#contact">Contact</a></li>
		<!-- ajouter des elements de navigation ici  -->
		</ul>
	</aside>

	<!-- NE PAS TOUCHER  -->
	<div><button data-pushbar-target="left" class="animBarre">
			<div class="barre"></div>
			<div class="barre"></div>
			<div class="barre"></div>
		</button>
	</div>
	<!-- NE PAS TOUCHER  -->
<!-- navigation -->


    <div class="container">
        <p class="titre">Espace membre</p>
        <div id="stepProgressBar">
            <div class="step">
                <p class="step-text">Informations </p>
                <div class="bullet">
                    <p>1</p>
                </div>
            </div>
            <div class="step">
                <p class="step-text">Contact</p>
                <div class="bullet">
                    <p>2</p>
                </div>
            </div>
            <div class="step">
                <p class="step-text">mot de passe</p>
                <div class="bullet">
                    <p>3</p>
                </div>
            </div>
            <div class="step">
                <p class="step-text">Niveau</p>
                <div class="bullet ">
                    <p>4</p>
                </div>
            </div>
        </div>

        <div id="1" class="contenue">

            <form method="POST" class="form_registration">
                <div class="encadré">
                    <label for=""><b>Nom: </b></label>
                    <div class="mail">
                        <input id="nom" type="text" name="" readonly>
                    </div>
                </div>
                <div class="encadré">
                    <label for=""><b>Prenom: </b></label>
                    <div class="mail">
                        <input id="prenom" type="text" name="" readonly>
                    </div>
                </div>
                <div class="encadré">
                    <label for=""><b>Taille(cm): </b></label>
                    <div class="mail">
                        <input id="taille" type="number" name="">
                    </div>
                </div>
                <div class="encadré">
                    <label for=""><b>Poids: </b></label>
                    <div class="mail">
                        <input id="poids" type="number" name="">
                    </div>
                </div>
                <div class="encadré">
                <label for="country">Sexe : </label>
                <div class="mail">
                    <select id="sexe" name="country" disabled>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                </div>
                </div>
                <div class="encadré">
                    <label for=""><b>date de naissance : </b></label>
                    <div class="mail">
                        <input id="dateNaissance" type="date" name="" readonly>
                    </div>
                </div>


            </form>
        </div>
        <div id="2" class="contenue">

            <form method="POST" class="form_registration">
                <div class="encadré">
                    <label for="email"><b>Mail: </b></label>
                    <div class="mail">
                        <input id="mail" type="text" name="mail">
                    </div>
                </div>

            </form>
        </div>
        <div id="3" class="contenue">

            <form method="POST" class="form_registration">
                <div class="encadré">
                    <label for="email"><b>Mot de passe: </b></label>
                    <div class="mail">
                        <input id="mdp" type="password" name="passwd1">
                    </div>
                </div>
                <div class="encadré">
                    <label for="email"><b>Confirmez mot de passe: </b></label>
                    <div class="mail">
                        <input id="mdp2" type="password" name="passwd2">
                    </div>
                    <label for=""><b>Voir mot de passe: </b></label>
                    <div class="mail">
                        <input type="checkbox" onclick="showMDP()">
                    </div>

                </div>
            </form>
        </div>
        <div id="4" class="contenue">

            <form method="POST" class="form_registration">
                <div class="encadré">
                    <p> veuillez renseigner votre niveau sportivements parlant</p>
                </div>
                <div class="encadré">
                    <label for="">Type utilisateur : </label>
                    <select id="mySelect" name="country">
                        <option value="Amateur" selected>Amateur</option>
                        <option value="Intermediaire">Intermédiaire</option>
                        <option value="Professionnel">Professionnel </option>
                    </select>
                </div>
            </form>
        </div>
        <div id="main">
            <p id="content" class="text-center">étape numero : 1</p>
            <button id="previousBtn">Précedent</button>
            <button id="nextBtn">Suivant</button>
            <button id="finishBtn" onclick="terminer()">Terminer</button>
        </div>
    </div>


</body>
<footer>
		<div id="foot">
			<p>Happy Fit - 2021 </p>
			<p>IUT D'orsay</p>
		</div>
	</footer>	


	<script type="text/javascript" src="src/pushbar.js"></script>
	<script>
		const pushbar = new Pushbar({
		blur: true,
		overlay: true,
		});
	</script>
	<script>
		var typed = new Typed(".typed", {
		strings: [
			"A vos marques?",
			"Prêt?",
			"Partez !",
			"Rejoignez l'aventure !",
			"Rejoignez Happy Fit !"
		],
		backSpeed: 10,
		typeSpeed: 65,
		startDelay: 0,
		});
	</script>	
</html>



<script>


        console.log(<?= json_encode($idUtilisateur); ?>);
        document.getElementById('prenom').value = <?= json_encode($prenom); ?>;
        document.getElementById('nom').value = <?= json_encode($nom); ?>;
        document.getElementById('mail').value = <?= json_encode($mail); ?>;
        document.getElementById('taille').value = <?= json_encode($taille); ?>;
        document.getElementById('poids').value = <?= json_encode($poids); ?>;
        var tempS = <?= json_encode($sexe); ?>;
        var mySelectSexe = document.getElementById('sexe')
        for (var i, j = 0; i = mySelectSexe.options[j]; j++) {
            if (i.value == tempS) {
                mySelectSexe.selectedIndex = j;
                break;
            }
        }
        document.getElementById('dateNaissance').value = <?= json_encode($date); ?>;
   
       
        var tempU = <?= json_encode($type); ?>;
        var mySelectU = document.getElementById('mySelect')
        for (var i, j = 0; i = mySelectU.options[j]; j++) {
            if (i.value == tempU) {
                mySelectU.selectedIndex = j;
                break;
            }
        }



        
      



    function showMDP() {

        var x = document.getElementById("mdp2");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        var x2 = document.getElementById("mdp");
        if (x2.type === "password") {
            x2.type = "text";
        } else {
            x2.type = "password";
        }
    }
    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    const content = document.getElementById('content');
    const bullets = [...document.querySelectorAll('.bullet')];

    const MAX_STEPS = 4;
    let currentStep = 1;
    finishBtn.disabled = true
    previousBtn.disabled = true

    document.getElementById(String(currentStep)).style.display = "block"
    nextBtn.addEventListener('click', () => {
        document.getElementById(String(currentStep)).style.display = "none"
        bullets[currentStep - 1].classList.add('completed');
        currentStep += 1;
        document.getElementById(String(currentStep)).style.display = "block"
        previousBtn.disabled = false;
        if (currentStep === MAX_STEPS) {
            nextBtn.disabled = true;
            finishBtn.disabled = false;
        }

    });


    previousBtn.addEventListener('click', () => {
        document.getElementById(String(currentStep)).style.display = "none"
        bullets[currentStep - 2].classList.remove('completed');
        currentStep -= 1;
        document.getElementById(String(currentStep)).style.display = "block"
        nextBtn.disabled = false;
        finishBtn.disabled = true;
        if (currentStep === 1) {
            previousBtn.disabled = true;
        }

    });

    //finishBtn.addEventListener('click', () => {
    // location.reload();
    // });





    function terminer() {

      
    alert("les donnée ont bien été modifiée")}
</script>