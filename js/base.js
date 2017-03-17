// BASE -----------------------------------------------
//
// // Récupère une entrée utilisateur
// var prenom = prompt("Entrer votre prénom:");
//
// // Pose une question et renvois un booléen
// var confirm = confirm("Est-vous sûr ?");
//
// if(confirm)
// {
//     if(typeof(prenom) === "undefined")
//     {
//         document.write("<p>Don't play with me hooman !</p>");
//     }
//     else
//     {
//         document.write("Bonjour" + " " + prenom);
//     }
// }
// else
// {
//     document.write("Apparament vous n'êtes pas sur de votre prénom");
// }


// // Création d'un objet
// var obj = {
//     prop: "value",
//     prop2: "value2"
// };
//
// // Appel de la propriétée
// document.write(obj.prop2);
//
// // Rajout d'une propriétée dans l'objet
// obj['prop3'] = 4;
//
// document.write(obj.prop3);
//
// // Ecrit dans la console
// console.log(obj);
// // Passe une warning dans la console
// console.warn(obj);
// // Passe une erreur dans la console
// console.error(obj);


// // Comparaison
// var a = true;
// var b = 1;
// var c = '1';
//
// // Comparaison après conversion
// console.log(a == b);
// console.log(b == c);
// console.log(a == c);
// // Comparaison stricte
// console.log(a === b);
// console.log(b === c);
// console.log(a === c);

// // Création d'élément html
// var p = document.createElement("p");
//
// // Récupération d'élément html par tag
// var paras = document.getElementsByTagName("p");
//
// // InnerHTML récupère l'html dans l'élément a la position zéros on peut ensuite le réassigner
// paras[0].innerHTML = "Hellow World";
//
//
// // Méthode magique plus puissante
// // Renvois le premier élément trouver (par l'id, classe, tag)
// document.querySelector();
//
// // Renvois tout les éléments trouver (par l'id, classe, tag)
// document.querySelectorAll();

//
// // Méthode parseInt pour transformer la chaine de caractère en entier
// var nombre1 = parseInt(prompt("Entrez le premier nombre"));
// var nombre2 = parseInt(prompt("Entrez le deuxième nombre"));
//
// var nombre3 = nombre1 + nombre2;
//
// document.querySelector("p").innerText = nombre1+" + "+nombre2+"= "+nombre3;
//
// // Fonction
//
// function calc(arg1, arg2)
// {
//     var result = parseInt(arg1) + parseInt(arg2);
//     return (arg1+" + "+ arg2+ " = "+ result);
// }
//
// //document.querySelector("p").innerText = calc(prompt("Entrez le premier nombre"), prompt("Entrez le deuxième nombre"));
//
//
//
//
// function askId()
// {
//     var nom = "";
//     var prenom = "";
//     while(nom.length == 0)
//     {
//         nom = prompt("Renseignez votre nom:");
//     }
//     while(prenom.length == 0)
//     {
//         prenom = prompt("Renseignez votre prenom:");
//     }
//     document.querySelector("p").innerHTML= "Vous vous appelez <strong>"+prenom+" "+nom+"</strong>.";
// }
/*
// Récupération d'élément dans le formulaire
function randomize(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// Récupère le nom du premier input type text et l'affiche dans les div ayant l'id nom
function getNom() {
    document.querySelector("#nom").innerText = document.querySelector('input[type="text"]').value;
}

// Coloration en rouge du nom
function aleaColor() {
    var r = randomize(0, 255);
    var g = randomize(0, 255);
    var b = randomize(0, 255);

    console.log(r);
    document.querySelector("#nom").setAttribute('style', 'color:rgb(' + r + ',' + g + ',' + b + ');');
}

// Fonction qui change la couleur du background
function aleaBackground() {
    // Changement de couleur
    var changecolor = function () {
        var r = randomize(0, 255);
        var g = randomize(0, 255);
        var b = randomize(0, 255);
        document.querySelector("html").setAttribute('style', 'background-color:rgb(' + r + ',' + g + ',' + b + ');');
    };

    // Changement de couleur qui se répète tout les 200ms
    var interval = setInterval(changecolor, 200);

    // Arrêt du changement de couleur au bout de 5000ms
    setTimeout(function(){clearInterval(interval)}, 2000);
}
*/

// Tableau/Boucle/Synchrone/Asynchrone
var tab = [1, 2, 3, 4, 5];

tab.forEach(function(value, key, tab){
   console.log(value);
   console.log(key);
   console.log(tab);
   console.log("-------------");
});


var associativeArray = {
    key: 'value',
    foo: 'bar',
    id: 42
};

//
for (k in associativeArray)
{
    console.log(k+" => "+associativeArray[k]);
}

// Parcourt d'un tableau associatif avec foreach
Object.keys(associativeArray).forEach(function(key, index)
{
    console.log(key+" => "+index);
    console.log(associativeArray[key]);
});



// Ici set timeout est asynchrone, elle lance le compteur mais le changement de la variable nom est effectuer a l'instruction d'après donc il y a d'afficher titi
var name ='toto';
setTimeout(function()
{
   console.log(name);
}, 2000);

name = 'titi';

// Ici un setTimeout récursif
function logName()
{
    setTimeout(function()
    {
       console.log(name);
       logName();
    }, 2000);
}

logName();
 name = "tata";

 // Ici setInterval qui évite de devoir faire une fonction récursive
function logName2()
{
    setInterval(function()
    {
        console.log(name);
    }, 2000);
}

logName2();
