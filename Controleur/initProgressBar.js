			///// BARRE DE PROGRESSION ////
				// fonction du bouton
			var maProgressBar = document.getElementById("progressbar");
			var calorieAbsorbee = 0;

			function reset(){
				if(calorieAbsorbee != 0){
					calorieAbsorbee = 0
					var width = calorieAbsorbee * 100 / besoinCalorie
					maProgressBar.style.width = width+"%";
	
					document.getElementById("txt2").textContent = " La barre de progression a été réinitialiser avec succès";
					// On l'efface 3 secondes après
					setTimeout(function() {
						document.getElementById('txt2').textContent = "";
						},3000);
				}
			}
			function actionBouton(nbCalorie, name){
				/*//Bouton retirer
				console.log(name)
				boutonDelete = document.getElementById(name+"D").style.display = "block"
				*/
				if((calorieAbsorbee + nbCalorie) > besoinCalorie)
				{
					var reste = (calorieAbsorbee + nbCalorie) - besoinCalorie
					if(confirm("Attention ! Vous allez dépasser votre objectif calorique de " + reste + " calories !"))
					{
						calorieAbsorbee += nbCalorie;
						var width = calorieAbsorbee * 100 / besoinCalorie
						maProgressBar.style.width = width+"%";
						addText()
					}
					else
						document.getElementById('txt2').textContent = "";
				}
				else{
					calorieAbsorbee += nbCalorie;
					
					var width = calorieAbsorbee * 100 / besoinCalorie
					maProgressBar.style.width = width+"%";
					console.log(maProgressBar.style.width)		
					console.log(width)		
					
					if (nbCalorie == "")
						document.getElementById("txt2").textContent = "Erreur !"
					else
						addText()

				}
			}

			function addText(){
				document.getElementById("txt2").textContent = calorieAbsorbee + " calories absorbées !";
				// On l'efface 3 secondes après
				setTimeout(function() {
					document.getElementById('txt2').textContent = "";
					},3000);
			}
		/* //Bouton retirer
			function actionBoutonDelete(nbCalorie){
				if (calorieAbsorbee > 0){
					calorieAbsorbee -= nbCalorie;
				}
				else{
					calorieAbsorbee = 0
				}
				
 				var test = calorieAbsorbee * 100 / besoinCalorie

				maProgressBar.style.width = test+"%";
				console.log(maProgressBar.style.width)		
				console.log(test)		
				
			}*/

			