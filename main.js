let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let totalValue = 0;
let total = 1000;
var affichageSomme = document.getElementById("affichage");
var affichageRules = document.getElementById("rules");
affichageSomme.innerHTML = "Votre somme d'argent initiale : " + total + " 💰";
affichageRules.innerHTML = "Si votre somme d'argent initiale est inférieure à 0 alors vous avez perdu :)";

const VALUES = [1000, -1000, 600, -600, 200, -400, 400, -200];

// lorsque le bouton est cliqué, alors on exécute le code de la fonction
btn.onclick = function () {
    if (total > 0) {
        // Math.floor arrondit à l'entier inférieur, Math.random génère un entier entre 0 et 1 exclus
        let randomAngle = Math.floor(Math.random() * 2500) + 1;
        totalValue = randomAngle;  // Incrémente la valeur totale
        container.style.transform = "rotate(" + totalValue + "deg)"; // Ajoute une propriété transform rotate dans le CSS
        console.log("totalValue " + totalValue);

        loopArray(VALUES, totalValue);

    } else {
        var echec = document.getElementById("echec");
        echec.innerHTML = "Vous avez perdu !";
        document.body.style.background = "red";
    }
};



function loopArray(values, angle) {
    const valueCount = values.length; // longueur du tableau
    const angleIncrement = 360 / valueCount; // 360 / 8 (la roue est de 360 degres ei il y 8 issue)
    // calcul de l'index
    const selectedIndex = Math.floor(angle / angleIncrement) % valueCount;
    console.log(selectedIndex)
    total += values[selectedIndex];
    if (values[selectedIndex] > 0){
        document.body.style.background = "green";
    } else {
        document.body.style.background = "red";

    }
    console.log("valeur obtenue: " + values[selectedIndex]);
    console.log("Somme d'argent : " + total);
    affichageSomme.innerHTML = "Votre somme d'argent : " + total + " 💰";
}
