function insertSQLToLocalData(table, data) {

    // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
    var open = indexedDB.open("Database", 3);

    // Create the schema
    open.onupgradeneeded = function () {
        var db = open.result;
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


function get(table) {
    return new Promise(function (resolve) {
        console.log(sessionStorage.getItem('saved'))
        if (!sessionStorage.getItem('saved')) {
            // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
            var test = false
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
                var storeLigneProgrammme = db.createObjectStore("LigneProgramme", {
                    autoIncrement: true
                });
                var storeLigneRecompense = db.createObjectStore("LigneRecompense", {
                    autoIncrement: true
                });
                var storeProgUtil = db.createObjectStore("ProgrammeUtilisateur", {
                    autoIncrement: true
                });
                var storeLigneProgUtil = db.createObjectStore("LigneProgrammeUtilisateur", {
                    autoIncrement: true
                });
                var storeLigneExo = db.createObjectStore("LigneExercice", {
                    autoIncrement: true
                });
                var index = storeUtilisateur.createIndex("NameIndex", ["nom", "prenom"]);
                var indexExercice = storeExercice.createIndex("ExerciceIndex", "nomExercice");
                var indexRepas = storeRepas.createIndex("IndexRepas", "idRepas");
                var indexActivite = storeActivite.createIndex("IndexActivite", "idActivite");
                var indexProgramme = storeProgramme.createIndex("IndexProgramme", "idProgramme");
                var indexRecompense = storeRecompense.createIndex("IndexRecompense", "idRecompense");
                var indexProgUtil = storeProgUtil.createIndex("IndexProgrammeUtilisateur", ["idProgrammeUtil", "idUtilisateur"])
                var ligneProg = storeLigneProgrammme.createIndex("IndexLigneProg", ["idProgramme", "idExercice"]);
                var ligneRecompense = storeLigneRecompense.createIndex("IndexProgramme", "idUtilisateur");
                var ligneProgUtil = storeLigneProgUtil.createIndex("IndexLigneProgUtil", ["idProgrammeUtil", "idUtilisateur"]);
                var ligneExercice = storeLigneExo.createIndex("IndexLigneExercice", ["idligneExercice", "idExercice"]);
            };




            select("SELECT * FROM utilisateur WHERE IDutilisateur=" + sessionStorage.getItem('userID')).then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("Utilisateur", element)
                });
            })

            select("SELECT * FROM exercice").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("Exercice", element)
                });
            })
            select("SELECT * FROM repas").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("Repas", element)
                });
            })
            select("SELECT * FROM activite").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("Activite", element)
                });
            })
            select("SELECT * FROM recompense").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("Recompense", element)
                });
            })
            select("SELECT * FROM programme").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("Programme", element)
                });
            })
            select("SELECT * FROM programmeUtilisateur").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("ProgrammeUtilisateur", element)
                });
            })
            select("SELECT * FROM ligneprog").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("LigneProgramme", element)
                });
            })
            select("SELECT * FROM ligneRecompense").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("LigneRecompense", element)
                });
            })
            select("SELECT * FROM ligneproutil").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("LigneProgrammeUtilisateur", element)
                });
            })

            select("SELECT * FROM ligneExercice").then((data) => {
                data.forEach(element => {
                    insertSQLToLocalData("LigneExercice", element)
                });
            })

            open.onsuccess = function () {
                db = open.result;
                /*
                tx = db.transaction(table, "readwrite");
                var store = tx.objectStore("Exercice");
                var index = store.index("ExerciceIndex");
                var getAllData = index.getAll();
                getAllData.onsuccess = function (event) {
                    return resolve(event.result);
                }
                */
                sessionStorage.setItem('saved', true);
                return resolve(true);
            }
        } else {
            return resolve(false);
        }

    });
}