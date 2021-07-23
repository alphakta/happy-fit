var divRepas = document.getElementById("idDejeuner");

function initialiserRepas(unRepas){


    var imgRecto = "images/" + unRepas.imageRepasRecto
    var imgVerso = "images/" + unRepas.imageRepasVerso
    var test = 
    "<div class='thumbnail'>"+
        "<img src='"+imgRecto+"'  onmouseover="+"this.src"+"='" 
        +imgVerso+"'; onmouseout="+"this.src"+"='"+imgRecto+"';>"+
            "<div class='caption'>"+
                "<button style='width: 100%;' onclick="+"actionBouton("+unRepas.nbCaloriesRepas+")><span class='glyphicon glyphicon-plus'></span></button>"+
            "</div>"+
       "</div>";
    var maDiv = document.createElement("div")
    maDiv.className = "col-sm-4"

    maDiv.innerHTML += test;
    divRepas.appendChild(maDiv);
}
var i;

select("SELECT * FROM repas").then((data) => {
    for(i = 0; i < data.length; i++)
    {
        initialiserRepas(data[i])
    }

  });

