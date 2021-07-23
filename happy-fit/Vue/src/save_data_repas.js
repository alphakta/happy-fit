
// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("Database", 1);

// Create the schema
open.onupgradeneeded = function () {
    var db = open.result;
    var store = db.createObjectStore("Repas", {
        keyPath: "id"
    });
    var index = store.createIndex("NameIndex", "test");
};

var tab
    select("SELECT * FROM repas ").then((data) => 
    {
        tab = data
    });

    console.log(tab[0].designationRepas)
/*
            open.onsuccess = function () 
            {
                // Start a new transaction
                var db = open.result;
                var tx = db.transaction("Repas", "readwrite");
                var store = tx.objectStore("Repas");
                // Ajouter des données
                store.put({
                    id: data[i].idRepas,
                    designationRepas: data[i].designationRepas,
                    tempsPrepa: data[i].tempsPrepa,
                    listeIngredient: data[i].listeIngredient,
                    recetteRepas: data[i].recetteRepas,
                    nbCaloriesRepas: data[i].nbCaloriesRepas,
                    glucideRepas: data[i].glucideRepas,
                    proteinesRepas: data[i].proteinesRepas,
                    lipidesRepas: data[i].lipidesRepas,
                    imageRepasRecto: data[i].imageRepasRecto,
                    imageRepasVerso: data[i].imageRepasVerso
                });
            
                // Close the db when the transaction is done
                tx.oncomplete = function () {
                    db.close();
                };
            }
    */


open.onsuccess = function () {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("Repas", "readwrite");
    var store = tx.objectStore("Repas");
    var index = store.index("NameIndex");

		// Récupérer toutes les données de la base de données sans paramètre
		var getAllData = index.getAll();
        getAllData.onsuccess = function () {
			console.log(getAllData.result[0].id);
        console.log(getAllData.result);
    };

    // Close the db when the transaction is done
    tx.oncomplete = function () {
        db.close();
    };
}
	

