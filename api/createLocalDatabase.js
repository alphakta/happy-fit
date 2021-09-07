// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("Database", 3);

// Create the schema
open.onupgradeneeded = function () {
    var db = open.result;
    var storeUtilisateur = db.createObjectStore("Utilisateur", {
        keyPath: "IDutilisateur"
    });

    var storeRepas = db.createObjectStore("Repas", {
        keyPath: "idRepas"
    });
    var storeExercice = db.createObjectStore("Exercice", {
        keyPath: "idExercice"
    });

    var storeActivite = db.createObjectStore("Activite", {
        keyPath: "idActivite"
    });
    var storeRecompense = db.createObjectStore("Recompense", {
        keyPath: "idRecompense"
    });
    var storeProgramme = db.createObjectStore("Programme", {
        keyPath: "idProgramme"
    });
    var storeLigneRecompense = db.createObjectStore("LigneRecompense", {
        autoIncrement: true
    });
    var storeLigneProgrammme = db.createObjectStore("LigneProgramme", {
        autoIncrement: true
    });

    var index = storeUtilisateur.createIndex("NameIndex", ["nom", "prenom"]);
    var indexExercice = storeExercice.createIndex("ExerciceIndex", "nomExercice");
    var indexRepas = storeRepas.createIndex("IndexRepas", "idRepas");
    var indexActivite = storeActivite.createIndex("IndexActivite", "idActivite");
    var programme = storeProgramme.createIndex("IndexProgramme", "idProgramme");
    var ligneProg = storeLigneProgrammme.createIndex("IndexLigneProg", ["idProgramme", "idExercice"]);
    var ligneRecompense = storeLigneRecompense.createIndex("IndexProgramme", "idUtilisateur");
};



function insertSQLToLocalData(table, id, data, version) {

    // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
    var open = indexedDB.open("Database", version);

    // Create the schema
    open.onupgradeneeded = function () {
        var db = open.result;
        /*
        var storeUtilisateur = db.createObjectStore(table, {
            keyPath: id
        });
        */
        //var index = storeUtilisateur.createIndex("NameIndex", ["name.last", "name.first"]);
    };

    open.onsuccess = function () {
        // Start a new transaction
        var db = open.result;
        var tx = db.transaction(table, "readwrite");
        var storeUtilisateur = tx.objectStore(table);
        //var index = storeUtilisateur.index("NameIndex");

        // Add some data
        storeUtilisateur.put(data);


        // Close the db when the transaction is done
        tx.oncomplete = function () {
            db.close();
        };
    }
}

select("SELECT * FROM utilisateur WHERE IDutilisateur=" + sessionStorage.getItem('userID')).then((data) => {
    /*
    console.log(typeof data)
    console.log(data)
    */
    data.forEach(element => {
        /*
        console.log("elemeeeeeeeeeeeeeent")
        console.log(element)
        */
        insertSQLToLocalData("Utilisateur", "IDutilisateur", element, 3)
        //insertSQLToLocalData("Utilisateur2", "IDutilisateur", element, 2)
        /*
        Object.entries(element).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
        });
        
        console.log('-------------------');
        */
    });
})

select("SELECT * FROM exercice").then((data) => {

    data.forEach(element => {

        insertSQLToLocalData("Exercice", "idExercice ", element, 3)

    });
})
select("SELECT * FROM repas").then((data) => {

    data.forEach(element => {

        insertSQLToLocalData("Repas", "idRepas", element, 3)

    });
})
select("SELECT * FROM activite").then((data) => {

    data.forEach(element => {
        console.log("elemeeeeeeeeeeeeeent")
        console.log(element)
        insertSQLToLocalData("Activite", "idActivite", element, 3)

    });
})
select("SELECT * FROM recompense").then((data) => {

    data.forEach(element => {

        insertSQLToLocalData("Recompense", "idRecompense", element, 3)

    });
})