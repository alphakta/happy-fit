// PARTIE BD
   var photoExerciceDB = [];
   var idExerciceDB = [];
   var idExerciceProgrammeDB = [];
   var photoExerciceDBFinal = [];
   var idExerciceDBFinal = [];
   var descEtapeDB = [];
   var descEtapeDBFinal = [];
   var increment = 0;

    get("Exercice").then(function (result) {
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
    var open = indexedDB.open("Database", 3);

    open.onsuccess = function () {
      // Start a new transaction
      var db = open.result;
      var tx = db.transaction("Exercice", "readwrite");
      var store = tx.objectStore("Exercice");
      var indexExercice = store.index("ExerciceIndex");

      // Récupérer toutes les données de la base de données sans paramètre
      var getExercice = indexExercice.getAll();
      getExercice.onsuccess = function () {

        changement_page();
        

        getExercice.result.forEach(element => {
          recuperer_Exercice_DB(element.photo, element.idExercice, element.descriptionExercice);
          });

        imgExo.setAttribute("src", photoExerciceDBFinal[0]);
        document.getElementById("textExo").innerHTML = descEtapeDBFinal[0];

        console.log(idExerciceDBFinal);
        console.log(photoExerciceDBFinal);
        console.log(descEtapeDBFinal);

      };

      // Close the db when the transaction is done
      tx.oncomplete = function () {
        db.close();
      };
    }
  });


  function changement_page(){
    if(increment == 0){
    console.log("test1")
    }
    else{
      console.log("test2")
    
     imgExo.setAttribute("src", photoExerciceDBFinal[increment]);
     document.getElementById("textExo").innerHTML = descEtapeDBFinal[increment];
    
  }
   increment++;
}
  

  function recuperer_Exercice_DB(photo, idExercice, desc){
   if(idExerciceDB[0] == null){
   for(i in idExerciceProgrammeDB){
    if (idExerciceProgrammeDB[i] == idExercice){
      if(i == 0 || i == 2 || i == 4 || i == 6){
      idExerciceDBFinal.push(idExercice);
     }
    }
    }
  }
  for(i in idExerciceProgrammeDB){
      if(idExerciceDBFinal[i] == idExercice){
        photoExerciceDBFinal.push(photo);
        descEtapeDBFinal.push(desc);
      }
    } 
  }
   get("LigneProgramme").then(function (result) {
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // Open (or create) the database
    var open = indexedDB.open("Database", 3);

    open.onsuccess = function () {
      // Start a new transaction
      var db = open.result;
      var tx = db.transaction("LigneProgramme", "readwrite");
      var store = tx.objectStore("LigneProgramme");
      var indexlignep = store.index("IndexLigneProg");

      // Récupérer toutes les données de la base de données sans paramètre
      var getLigneP = indexlignep.getAll();
      getLigneP.onsuccess = function () {
        getLigneP.result.forEach(element => {
          recuperer_LigneProg_DB(element.idExercice)
        });
      };

      // Close the db when the transaction is done
      tx.oncomplete = function () {
        db.close();
      };
    }
  });


  function recuperer_LigneProg_DB(idExercice){
    idExerciceProgrammeDB.push(idExercice); 
  }

  


// PARTIE TIMER

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;


function onTimesUp() {
  showIt()
  clearInterval(timerInterval);
}

function startTimer() {
	document.getElementById("Button2").style.visibility = "hidden";
  document.getElementById("Button1").style.visibility = "hidden";
  resetTimer();
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function resetTimer(){
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerInterval = null;
  remainingPathColor = COLOR_CODES.info.color;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function showIt() {
	document.getElementById("Button1").style.visibility = "visible";
}

// PARTIE BARRE DE PROGRESSION

const NB_EXERCICE_TOTAL = 4
const BUTTON = document.querySelector('button');

var pourcentageCouleur = 0;
var nbExerciceActuel = 0;


document.getElementById("texteBarre").innerHTML = "- 0 / "+ NB_EXERCICE_TOTAL + " -" // + "nom Exercice"


function changeCouleur(){
 if (nbExerciceActuel/NB_EXERCICE_TOTAL <= 0.5){
  pourcentageCouleur = 10 + (nbExerciceActuel/NB_EXERCICE_TOTAL*100)
  document.getElementById("barreProg").style.backgroundImage = "linear-gradient(to right, #cffdf8,#cffdf8, #216583 " + pourcentageCouleur +"%)"
  document.getElementById("texteBarre").innerHTML = "- " +nbExerciceActuel + " / "+ NB_EXERCICE_TOTAL + " -"
}
else{
  pourcentageCouleur = 20 + (nbExerciceActuel/NB_EXERCICE_TOTAL*100)
  document.getElementById("barreProg").style.backgroundImage = "linear-gradient(to right, #cffdf8,#cffdf8, #216583 " + pourcentageCouleur +"%)"
  document.getElementById("texteBarre").innerHTML = "- " +nbExerciceActuel + " / "+ NB_EXERCICE_TOTAL + " -"

}
} 

function dernierChangement(){
document.getElementById("barreProg").style.backgroundImage = "linear-gradient(to right, #cffdf8,#cffdf8)"
document.getElementById("texteBarre").innerHTML = "- " +nbExerciceActuel + " / "+ NB_EXERCICE_TOTAL + " -"
document.getElementById("divButton").innerHTML = "<button onclick=" + "Increment() "+">Terminer</button>";
}

function Redirection(){
location.replace("/happyfit-2021/ProgrammePré-fait/catalogue_programme.html")
}

function Increment(){
nbExerciceActuel = nbExerciceActuel + 1;
if (nbExerciceActuel < (NB_EXERCICE_TOTAL)){  
  changeCouleur();
}
else if (nbExerciceActuel == (NB_EXERCICE_TOTAL)) {
  dernierChangement();
}
else{
  Redirection();

}
};


