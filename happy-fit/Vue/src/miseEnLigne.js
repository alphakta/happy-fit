function test(){
    var temp = document.getElementById("liste").innerHTML; 
    var count = (temp.match(/-/g) || []).length;
    console.log(count);
    for(var i=0; i<count; i++){
        var str = document.getElementById("liste").innerHTML; 
        var res = str.replace("-", "<br> ~ ");
        document.getElementById("liste").innerHTML = res;
    }
    var temp = document.getElementById("reccetteList").innerHTML; 
    var count = (temp.match(/-/g) || []).length;
    console.log(count);
    for(var i=0; i<count; i++){
        var str = document.getElementById("reccetteList").innerHTML; 
        var res = str.replace("-", "<br> ~ ");
        document.getElementById("reccetteList").innerHTML = res;
    }

 }