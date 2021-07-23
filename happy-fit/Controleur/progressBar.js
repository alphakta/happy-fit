			///// BARRE DE PROGRESSION ////
				// fonction du bouton
			var test
			var maProgressBar = document.getElementById("progressbar");
			var calorieAbsorbee = 0;

			function actionBouton(nbCalorie){

				if((calorieAbsorbee + nbCalorie) > besoinCalorie)
				{
					var reste = (calorieAbsorbee + nbCalorie) - besoinCalorie
					if(confirm("Attention ! Vous allez depasse votre objectif calorique de " + reste + " calories !"))
						calorieAbsorbee += nbCalorie;

				}
				else
				{
					calorieAbsorbee += nbCalorie;
				}


 				test = calorieAbsorbee * 100 / besoinCalorie

				maProgressBar.style.width = test+"%";
				console.log(maProgressBar.style.width)		
				console.log(test)		
				//console.log(calorieAbsorbee);
				//console.log(maProgressBar.value);
				//console.log(maProgressBar.max);
				
				if (nbCalorie== "")
					document.getElementById("txt2").textContent = "Erreur"
				else
					document.getElementById("txt2").textContent = calorieAbsorbee + " calories absorbee";

			}
			