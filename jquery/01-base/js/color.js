$(document).ready(function()
{
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


function changeColor(color)
{
    $('#nom').fadeOut(500, function ()
    {
        $(this).css("color", color);
        $(this).fadeIn(500);
    });
}