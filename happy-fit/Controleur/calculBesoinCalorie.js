	
			//var userID = sessionStorage.getItem('userID')
			userID = 57
			console.log(userID)
/*
			get("Utilisateur").then(function (result) {
				console.log(result) 
				var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
			
				// Open (or create) the database
				var open = indexedDB.open("Database", 3);
			
				open.onsuccess = function () {
				  // Start a new transaction
				  var db = open.result;
				  var tx = db.transaction("Utilisateur", "readwrite");
				  var store = tx.objectStore("Utilisateur");
				  var index = store.index("NameIndex");
			
				  // Récupérer toutes les donénes de la base de donnée sans parametre
				  var getUtilisateur = index.getAll();
				  getUtilisateur.onsuccess = function () {
					getUtilisateur.result.forEach(element => {
						console.log(element.IDutilisateur)
						console.log(typeof(element.IDutilisateur))

						if(element.IDutilisateur == userID)
						{
							console.log(element.dateNaissance)
							console.log(element.poids)
							initUser(element.dateNaissance, element.poids, element.sexe, element.taille, element.typeUtilisateur)
						}
					});
				  };
				  // Close the db when the transaction is done
				  tx.oncomplete = function () {
					db.close();
				  };
				}
			  });*/
			
			  select("SELECT * FROM utilisateur WHERE utilisateur.IDutilisateur = "+userID).then((data) => {
				  	console.log(data[i].IDutilisateur)
					initUser(data[i].dateNaissance, data[i].poids, data[i].sexe, data[i].taille, data[i].typeUtilisateur)
			  });
			
			 // Variables globales
			 var age 
			 var poids 
			 var sexe 
			 var facteurA 
			 var taille
			 var besoinCalorie

			function initUser(dateNaissance, poidsUser, sexeUser, tailleUser, typeUser){
				var wordsNaissance = dateNaissance.split("-")
				var annee = wordsNaissance[0]
				var mois = wordsNaissance[1]
				var jour = wordsNaissance[2]

				var date = new Date(annee, mois, jour)
				 age = getAge(date)
				 poids = poidsUser
				 sexe = sexeUser
				 taille = tailleUser

				 if(typeUser == "Professionnel")
					facteurA = 3
				if(typeUser == "Intermédiaire")
					facteurA = 2				
				else
					facteurA = 1
		
					console.log(age)
					console.log(sexe)
					console.log(poids)
					console.log(taille)
					console.log(facteurA)
		
					var MetabolismeDeBase = calculMetabolismeDeBase(sexe,poids,taille,age);
					console.log(MetabolismeDeBase)
					besoinCalorie = calculBesoinCalorique(MetabolismeDeBase,facteurA);
					console.log(besoinCalorie)
					document.getElementById("txt").textContent= "Objectif: " + besoinCalorie + " calories" ;

					// Fonction pour calculer l'age en fonction de la date de naissance
					function getAge(date) { 
						var diff = Date.now() - date.getTime();
						var age = new Date(diff); 
						return Math.abs(age.getUTCFullYear() - 1970);
					}

					// Fonction pour calculer le métabolisme de base de l'utilisateur
					function calculMetabolismeDeBase(sexe, poids, taille, age) {
						taille = taille / 100;
						// formule de Harris et Benedict 
						if (sexe == "Homme")
							return Math.round ((13.707*poids) + (492.3*taille) - (6.673*age) + 77.607);
						
						else if (sexe == "Femme")
							return Math.round ((9.740*poids) + (172.9*taille) - (4.737*age) + 667.051);
						else
							return 0;
						}

					// Fonction pour calculer le besoin calorique de l'utilisateur
					function calculBesoinCalorique(mbd, facteurActivite){
						// très peu sportif
						if(facteurActivite == 1)
							return Math.round(mbd * 1.37);
						
						// peu sportif
						if(facteurActivite == 2)
							return Math.round(mbd * 1.55);
		
						// très sportif
						if(facteurActivite == 3)
							return Math.round(mbd * 1.80);
					}
			}

			
