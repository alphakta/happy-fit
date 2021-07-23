let btnNav = document.getElementsByClassName("btn-nav")
var a = location.href;
var b = a.split('/');
var c = b.pop('/');

var btnConseil = document.getElementById("btnConseil")
var btnFicheRepas = document.getElementById("btnFicheRepas")
var btnFormRepas = document.getElementById("btnFormRepas")

if ( c == 'page_fiche_repas.html') 
{
    btnFicheRepas.style.display = "none"
}
if ( c == 'conseil.html') 
{
    btnConseil.style.display = "none"
}
if ( c == 'formRepas.html') 
{
    btnFormRepas.style.display = "none"
}