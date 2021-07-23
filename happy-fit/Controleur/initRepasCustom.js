var divRepas = document.getElementById("hihi");

// Initialisation du RECTO du repas customisé
function initRepasRectoCustom(designation, tempsPrepa, listeIng){

    var divRecto = document.createElement("div")
    divRecto.id = "box"

    var divTime = document.createElement("div")
    divTime.className = "posTime"
    var spanTime = document.createElement("span")
    spanTime.id = "title1"
    spanTime.textContent = designation // logiquement ça devrait être unRepas.tempsPrepa...
    divTime.appendChild(spanTime)

    var divTit = document.createElement("div")
    divTit.className = "posTit"
    var spanTit = document.createElement("span")
    spanTit.id = "title2"
    // logiquement ça devrait être unRepas.designationRepas...
    spanTit.textContent = tempsPrepa + " mins"
    divTit.appendChild(spanTit)

    var divIngrs = document.createElement("div")
    divIngrs.className = "postest"
    var spanIngrs = document.createElement("span")
    spanIngrs.id = "title3"
    spanIngrs.textContent = "Ingredients : "
    divIngrs.appendChild(spanIngrs)

    var divListeIng = document.createElement("div")
    divListeIng.id = "boxText"
    var listeIng = document.createElement("p")
    listeIng.id = "liste"
    listeIng.innerHTML = listeIng
    divListeIng.appendChild(listeIng)

    // On add toutes les div "secondaire" dans la div principale -> 'box' du RECTO
    divRecto.appendChild(divTime)
    divRecto.appendChild(divTit)
    divRecto.appendChild(divIngrs)
    divRecto.appendChild(divListeIng)

    // Ajout de la div dédiée au RECTO du repas custom ----> à la div avec id "hihi"
    divRepas.appendChild(divRecto)
};

// Initialisation du VERSO du repas customisé
function initRepasVersoCustom(recette, lip, gluc, prot, cal){

        var divVerso = document.createElement("div")
        divVerso.id = "box2"
        console.log("recette???")
        console.log(recette)
        var divRecette = document.createElement("div")
        divRecette.className = "posTime"
        var spanRecette = document.createElement("span")
        spanRecette.id = "title5"
        spanRecette.textContent = "Recette"
        divRecette.appendChild(spanRecette)

        var divVersoText = document.createElement("div")
        divVersoText.id = "boxText2"

        var listeRec = document.createElement("p")
        listeRec.id = "reccetteList"
        listeRec.innerHTML = recette

        divVersoText.appendChild(listeRec)

        var divTxtBoxCal = document.createElement("div")
        divTxtBoxCal.id = "textBoxCal"
        // Lipides
        var span1 = document.createElement("span")
        span1.id = "titleCal"
        span1.textContent = "Lipides : "

        var span11 = document.createElement("span")
        span11.id = "lipid"
        span11.textContent = lip + "g"
        divTxtBoxCal.appendChild(span1)
        divTxtBoxCal.appendChild(span11)
        divTxtBoxCal.innerHTML += "<br>" // gérer le retour à la ligne

        // Glucides
        var span2 = document.createElement("span")
        span2.id = "titleCal"
        span2.textContent = "Glucides : "

        var span22 = document.createElement("span")
        span22.id = "glu"
        span22.textContent = gluc + "g"
        divTxtBoxCal.appendChild(span2)
        divTxtBoxCal.appendChild(span22)
        divTxtBoxCal.innerHTML += "<br>" // gérer le retour à la ligne

        // Proteines
        var span3 = document.createElement("span")
        span3.id = "titleCal"
        span3.textContent = "Proteines : "

        var span33 = document.createElement("span")
        span33.id = "prot"
        span33.textContent = prot + "g"
        divTxtBoxCal.appendChild(span3)
        divTxtBoxCal.appendChild(span33)
        divTxtBoxCal.innerHTML += "<br>" // gérer le retour à la ligne

        // Calories
        var span4 = document.createElement("span")
        span4.id = "titleCal"
        span4.textContent = "Calories : "

        var span44 = document.createElement("span")
        span44.id = "cals"
        span44.textContent = cal + " kcal"
        divTxtBoxCal.appendChild(span4)
        divTxtBoxCal.appendChild(span44)

        // add de la div txtBoxCal dans boxText2
        divVersoText.appendChild(divTxtBoxCal)

        // On add toutes les div "secondaire" dans la div principale -> 'box2' du VERSO
        divVerso.appendChild(divRecette)
        divVerso.appendChild(divVersoText)

    // Ajout de la div dédiée au VERSO du repas custom ----> à la div avec id "hihi"
    divRepas.appendChild(divVerso)
    };

    get("Repas").then(function (result) {
        console.log(result) 
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    
        var open = indexedDB.open("Database", 3);

        open.onsuccess = function () {
            // Start a new transaction
            var db = open.result;
            var tx = db.transaction("Repas", "readwrite");
            var store = tx.objectStore("Repas");
            var index = store.index("IndexRepas");
      
            // Récupérer toutes les donénes de la base de donnée sans parametre
            var getRepas = index.getAll();
            getRepas.onsuccess = function () {
              getRepas.result.forEach(element => {
                  if(element.imageRepasRecto == "none.png" && element.imageRepasVerso == "none.png")
                  {
                    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
                    console.log(element.recetteRepas)

                    initRepasRectoCustom(element.designationRepas, element.tempsPrepa, element.listeIngredient)
                    initRepasVersoCustom(element.recetteRepas, element.lipidesRepas, element.glucideRepas, element.proteinesRepas, element.nbCaloriesRepas)
                  }
              });
          };
          tx.oncomplete = function () {
            db.close();
          };
        }
      });