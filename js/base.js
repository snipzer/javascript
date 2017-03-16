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

// Fonction

function calc(arg1, arg2)
{
    var result = parseInt(arg1) + parseInt(arg2);
    return (arg1+" + "+ arg2+ " = "+ result);
}

//document.querySelector("p").innerText = calc(prompt("Entrez le premier nombre"), prompt("Entrez le deuxième nombre"));




function askId()
{
    var nom = "";
    var prenom = "";
    while(nom.length == 0)
    {
        nom = prompt("Renseignez votre nom:");
    }
    while(prenom.length == 0)
    {
        prenom = prompt("Renseignez votre prenom:");
    }
    document.querySelector("p").innerHTML= "Vous vous appelez <strong>"+prenom+" "+nom+"</strong>.";
}






