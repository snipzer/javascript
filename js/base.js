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

// Création d'élément html
var p = document.createElement("p");

// Récupération d'élément html par tag
var paras = document.getElementsByTagName("p");

// InnerHTML récupère l'html dans l'élément a la position zéros on peut ensuite le réassigner
paras[0].innerHTML = "Hellow World";



















