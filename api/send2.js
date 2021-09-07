function insert() {
    //var url = "https://webdev.iut-orsay.fr/happyfit-2021/api/insert2.php";
    var url = "insert2.php";
    var params = "lorem=ipsum&name=binny";
    var request = new XMLHttpRequest()
    request.open(
        "POST",
        url,
        true
    );
    //request.setRequestHeader("Content-Type", "application/json")
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params)
    request.onload = function () {
        console.log("Statut : " + request.status)
    }
}