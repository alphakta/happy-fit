			///// BARRE DE PROGRESSION ////
			function actionBouton(){
				var maProgressBar = document.getElementById("progressbar");
				calorieAbsorbee = parseInt(maProgressBar.value);

				calorieAbsorbee += parseInt(document.getElementById("nbCalorie").value);

				// 1 = null
				//if(maProgressBar.max == 1)
				//{
					maProgressBar.setAttribute("max",besoinCalorie);
				//}

				maProgressBar.setAttribute("value",calorieAbsorbee);
				console.log(calorieAbsorbee);
				console.log(maProgressBar.value);
				console.log(maProgressBar.max);

				if (document.getElementById("nbCalorie").value == "")
					document.getElementById("txt2").innerHTML = "Erreur!"

				if(calorieAbsorbee > besoinCalorie)
				{
					document.getElementById("txt2").innerHTML = "Attention! Objectif calorique dépassé! <br>" + calorieAbsorbee + " calories absorbées";
				}
				else
					document.getElementById("txt2").innerHTML = calorieAbsorbee + " calories absorbées!";
			}
			