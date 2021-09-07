const jsonRepas = {
    Repas: [
        {
            idRepas: 1,
            idLigneRepas: 1,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 457
        },
        {
            idRepas: 2,
            idLigneRepas: 2,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 650
        },
        {
            idRepas: 1,
            idLigneRepas: 1,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 457
        },
        {
            idRepas: 1,
            idLigneRepas: 1,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 457
        },
        {
            idRepas: 2,
            idLigneRepas: 2,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 650
        },
        {
            idRepas: 1,
            idLigneRepas: 1,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 457
        },
        {
            idRepas: 2,
            idLigneRepas: 2,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 650
        },
        {
            idRepas: 1,
            idLigneRepas: 1,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 457
        },
        {
            idRepas: 2,
            idLigneRepas: 2,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 650
        },
        {
            idRepas: 1,
            idLigneRepas: 1,
            designationRepas: "Nouilles sautées au poulet",
            imageRepasRecto: "recto_repas1.png",
            imageRepasVerso: "verso_repas1.png",
            nbCalories: 457
        }
    ]
};
var divRepas = document.getElementById("idDejeuner");
//console.log(jsonRepas.Repas[0].imageRepas);
//console.log(jsonRepas.Repas[0].nbCalories);



function initialiserRepas(unRepas){
    // a enlever plus tard
/*
    function mouseOver() {
        monImage.src = unRepas.imageRepasVerso;
    }
    
    function mouseOut() {
        monImage.src = unRepas.imageRepasRecto;
    }

    var monImage = "<img src='"+unRepas.imageRepasRecto+" class='img-thumbnail'' height='"+height+"' width='"+width+"'  onmouseover="+"this.src"+"='" 
    +unRepas.imageRepasVerso+"'; onmouseout="+"this.src"+"='"+unRepas.imageRepasRecto+"'; </img>";
    var button = "<button onclick="+"actionBouton("+unRepas.nbCalories+")> + </button>"*/

    var imgRecto = "img/" + unRepas.imageRepasRecto
    var imgVerso = "img/" + unRepas.imageRepasVerso
    var test = 
    "<div class='thumbnail'>"+
        "<img src='"+imgRecto+"'  onmouseover="+"this.src"+"='" 
        +imgVerso+"'; onmouseout="+"this.src"+"='"+imgRecto+"';>"+
            "<div class='caption'>"+
                "<button style='width: 100%;' onclick="+"actionBouton("+unRepas.nbCalories+")><span class='glyphicon glyphicon-plus'></span></button>"+
            "</div>"+
       "</div>";
    var maDiv = document.createElement("div")
    maDiv.className = "col-sm-4"

    maDiv.innerHTML += test;
    divRepas.appendChild(maDiv);
}


for( var i = 0; i < jsonRepas.Repas.length; i++)
    initialiserRepas(jsonRepas.Repas[i])


console.log(jsonRepas.Repas.length)
