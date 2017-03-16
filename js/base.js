
// BASE -----------------------------------------------
// var toto;
//
// // Récupère une entrée utilisateur
// toto = prompt("Entré votre nom:");
//
// // Pose une question et renvois un booléen
// var confirm = confirm("Question");
//
// if(confirm)
// {
//     document.write(toto);
// }
// else
// {
//     document.write("Pas confirmer");
// }


// Création d'un objet
var obj = {
    prop: "value",
    prop2: "value2"
};

// Appel de la propriétée
document.write(obj.prop2);

// Rajout d'une propriétée dans l'objet
obj['prop3'] = 4;

document.write(obj.prop3);

// Ecrit dans la console
console.log(obj);
// Passe une warning dans la console
console.warn(obj);
// Passe une erreur dans la console
console.error(obj);