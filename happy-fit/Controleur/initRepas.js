let divRepas = document.getElementById("idDejeuner");

function initialiserRepas(nbCaloriesRepas, imageRepasRecto, imageRepasVerso, i){

    var imgRecto = "../images/Nutrition/" + imageRepasRecto
    var imgVerso = "../images/Nutrition/" + imageRepasVerso
    var num = i + 1

    var divPrincipal = document.createElement("div")
    var divSecond = document.createElement("div")
    var divContainer = document.createElement("div")
    var divCard = document.createElement("div")
    var divR = document.createElement("div")
    var divV = document.createElement("div")

    var boutonAdd = document.createElement("button")

    var imageR = document.createElement("img")
    var imageV = document.createElement("img")


    boutonAdd.type = "button"
    boutonAdd.textContent = "Ajouter"
    boutonAdd.id = "bouton"+num
    boutonAdd.className= "btn-center"
    boutonAdd.setAttribute("onClick", "actionBouton("+nbCaloriesRepas+", this.id)")
    
    // initialisation des id et classname
    divPrincipal.id = "div"+num
    divSecond.className = "grid-item"
    divContainer.className = "containerRepas"
    divCard.id = "card"
    divR.className = "front face"
    divV.className = "back face"

    // initialisation de la source de "l'image"
    imageR.src = imgRecto
    imageV.src = imgVerso

    // style de l'image verso
    imageV.style.display = "block"
    imageV.style.marginLeft = "auto"
    imageV.style.marginRight = "auto"
    // ajout dans les div qui gère la rotation Recto/Verso
    divR.appendChild(imageR)
    divV.appendChild(imageV)
    // ajout dans divCard
    divCard.appendChild(divR)
    divCard.appendChild(divV)
    // ajout dans divContainer
    divContainer.appendChild(divCard)

    divSecond.append(divContainer)
    // ajout des div "secondaire" dans la div principale
    divPrincipal.appendChild(divSecond)
    divPrincipal.appendChild(boutonAdd)
    // BOUTON RETIRER //////// div.appendChild(boutonDelete)

    // ajout dans la div affichant toutes les fiches repas
    divRepas.appendChild(divPrincipal);
}


var i = 0;
get("Repas").then(function (result) {
    console.log(result) 
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
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
            //console.log(element.designationRepas)
            //console.log(element.nbCaloriesRepas)
            if(element.imageRepasRecto != "none.png" && element.imageRepasVerso != "none.png")
                initialiserRepas(element.nbCaloriesRepas, element.imageRepasRecto, element.imageRepasVerso, i)
            i++;
        });
      };
      // Close the db when the transaction is done
      tx.oncomplete = function () {
        db.close();
      };
    }
  });
  /*
select("SELECT * FROM repas WHERE imageRepasRecto <> 'none.png' AND imageRepasVerso <> 'none.png'").then((data) => {
    for(i = 0; i < data.length ; i++)
    {
        initialiserRepas(data[i], i)
        console.log(data[i].designationRepas)
    }

  });*/
