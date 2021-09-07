<?php

// connect to the database
require_once("../config.php");
$host = "localhost";
$user = "happyfit-2021";
$bdd = "happyfit-2021";
$passwd  = "YWgkhmebfF2Z8Ol4";

$co = mysqli_connect($host, $user, $passwd , $bdd) or die("erreur de connexion");
// Add item
if (isset($_POST['add'])) {
  // receive all input values from the form
  echo "connect";
  $Nom = mysqli_real_escape_string($co, $_POST['Nom']);
  $Image = mysqli_real_escape_string($co, $_POST['Image']);
  $Description = mysqli_real_escape_string($co, $_POST['Descr']);

  // inserer la nouvelle activité dans le tableau
  $query = "INSERT INTO produit (nomExercice, descriptionExercice, photo) 
  			  VALUES('$Nom','$Description', '$Image')";
  if (mysqli_query($co, $query)) {
    $message = 'Donnée a été mise à jour';
  } else {
    echo "<script>alert('Somthing wrong!!!');</script>";
  }
  // retour au catalogue exercice
  header('location: ../catalogue_exercice.html');
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  <meta charset="utf-8" />
  <title>Titre</title>
  <link rel="stylesheet" href="style_catalogue_exercice.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body class="text-center">
  <script src="/happyfit-2021/api/get.js"></script>
  <script src="/happyfit-2021/api/createLocalDatabase2.js"></script>
  <div id="barre">
    <nav>
      <ul>
        <li><img src="logo_b.png" alt="logo" style="height: 53px;margin-right: 500px;margin-left: 100px; "></li>
        <li><a href="#inscription">Inscription</a></li>
        <li><a href="#connexion">Connexion</a></li>
        <li><a href="#contact">Nous contacter</a></li>
      </ul>
    </nav>
  </div>
  <main>
    <div class="container">
      <div class="card mt-5">
        <h2 class="h3 mb-3 fw-normal">Ajouts d'un produit</h2>
        <div class="card-body">
          <?php if (!empty($message)) : ?>
            <div class="alert alert-success">
              <?= $message; ?>
            </div>
          <?php endif; ?>

          <form method="POST">
            </br>
            <div class="form-group">
              <label for="NomProduit" class="visually-hidden">Nom Produit</label>
              <input type="text" name="Nom" class="form-control" placeholder="Nom du produit" required autofocus>
            </div>
            </br>
            <div class="form-group">
              <label for="name">Description</label>
              <input type="text" class="form-control" name="Descr" required autofocus>
            </div>
            </br>
            <div class="form-group">
              <label for="exampleFormControlFile1">Choisir l'image du fichier</label>
              <input type="file" name="Image" class="form-control" id="exampleFormControlFile1" placeholder="Description du produit" required autofocus>
            </div>
            </br>
            </br>
            <div class="form-group">
              <button type="submit" class="btn btn-info" name="add">Ajout Produit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer>
      <div id="foot">
        <p>Happy Fit - 2021 </p>
        <p>IUT D'orsay</p>
      </div>
    </footer>
  </main><!-- /.container -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
</body>

</html>