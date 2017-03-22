$(document).ready(function()
{
    // La div id nom récupère la valeur de l'input type text
    $("input").keyup(function ()
    {
        $("#nom").text($('input[type="text"]').val());
    });

    // Le bouton rouge applique la couleur rouge
    $("#rouge").click(function()
    {
        $("#nom").css("color", 'red');
    });

    // Le bouton bleu applique la couleur bleu
    $("#bleu").click(function()
    {
        $("#nom").css("color", 'blue');
    });

    // Le bouton vert applique la couleur vert
    $("#vert").click(function()
    {
        $("#nom").css("color", 'green');
    });
});