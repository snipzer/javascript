$(document).ready(function()
{
    function changeColor(color)
    {
        $("#nom").css("color", color);
    }

    // La div id nom récupère la valeur de l'input type text
    $("input").keyup(function ()
    {
        $("#nom").text($('input[type="text"]').val());
    });

    // Le bouton applique la couleur qu'il possède en data
    $(".color").click(function()
    {
        changeColor($(this).attr("data"));
    });
});