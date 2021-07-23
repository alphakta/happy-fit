var select = function (sql) {
  return new Promise(function (resolve, reject) {
    var url = "/happyfit-2021/api/get.php";
    const request = new XMLHttpRequest()
    request.open("GET", url + "?sql=" + sql)
    request.send()
    request.onload = function () {
      console.log("Statut : " + request.status)
      /*
      console.log("Reponse : " + request.response)
      console.log(request.response)
      */
      var data = request.response
      return_data = JSON.parse(data)

      resolve(return_data);
    }
  });
}

/*
function select(sql) {
  var url = "/happyfit-2021/api/get.php";
  //var sql = "SELECT * FROM test";
  const request = new XMLHttpRequest()
  request.open("GET", url + "?sql=" + sql)
  request.send()
  request.onload = function () {
    console.log("Statut : " + request.status)
    console.log("Reponse : " + request.response)
    var data = request.response
    console.log(data)

    return_data = JSON.parse(data)
    console.log(JSON.stringify(data))
    console.log(typeof data.replace(/[\&]/g, ''))
    console.log(typeof JSON.parse(data.replace(/[\&]/g, '')))
    console.log(typeof JSON.parse(data))
    console.log(JSON.parse(data))
    //console.log(return_data['0'].nom)
    return return_data
  }
}
*/