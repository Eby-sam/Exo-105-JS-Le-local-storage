const stockage = window.localStorage;
stockage.setItem("taille", "26");
stockage.setItem("type", "Roboto");
stockage.setItem("theme", "Jaune");

let divResult = document.getElementById("result");

function MaFunction() {
    divResult.innerHTML = stockage.getItem("theme");
    console.log("Thème " + stockage.getItem("theme") + ", type " + stockage.getItem("type") + " et police de caractères " +
        stockage.getItem("taille") + "px");
}
MaFunction();