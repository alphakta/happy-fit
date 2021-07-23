/*
var jsontest = {
  test: [{
    n: 20,
    texte: "INSERT"
  }]
}
console.log(JSON.stringify(jsontest))
*/
function insert(js_json) {

  var url = "/happyfit-2021/api/insert.php";

  var request = new XMLHttpRequest()
  request.open(
    "POST",
    url,
    true
  );
  request.setRequestHeader("Content-Type", "application/json")
  request.onload = function () {
    console.log("Statut : " + request.status)
  }
  request.send(JSON.stringify(js_json))
}