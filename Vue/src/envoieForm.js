function ajoutRepas(){

get("Repas").then(function (result) {
    
    
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    
    var open = indexedDB.open("Database", 3);
    
    open.onupgradeneeded = function () {
        var db = open.result;
    };
    
    open.onsuccess = function () {
        var db = open.result;
        var rand =  Math.floor(Math.random() * 9999) + 1000;
        var tx = db.transaction("Repas", "readwrite");
        var store = tx.objectStore("Repas");
        var index = store.index("IndexRepas");
        store.put({
            idRepas : rand,
            idUtilisateur: document.getElementById('idUti').value,
            designationRepas: document.getElementById('nom').value,
            tempsPrepa: document.getElementById('temps').value, 
            listeIngredient: document.getElementById('ingre').value,
            recetteRepas: document.getElementById('recette').value,
            nbCaloriesRepas: document.getElementById('TotCalorie').value,
            glucideRepas: document.getElementById('glu').value,
            proteinesRepas: document.getElementById('lip').value,
            lipidesRepas: document.getElementById('pro').value,
            imageRepasRecto:"none.png",
            imageRepasVerso:"none.png"   
        });
        console.log(document.getElementById('recette').textContent)
        console.log(document.getElementById('recette').value)
        console.log(document.getElementById('recette').innerHTML())
        console.log(document.getElementById('recette').textContent())

        tx.oncomplete = function () {
            db.close();
        };
    
    }
});

}

