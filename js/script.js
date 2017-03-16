var toto;

// Récupère une entrée utilisateur
toto = prompt("Entré votre nom:");

// Pose une question et renvois un booléen
var confirm = confirm("Question");

if(confirm)
{
    document.write(toto);
}
else
{
    document.write("Pas confirmer");
}
