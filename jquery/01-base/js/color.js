$(document).ready(function()
{
    // La div id nom récupère la valeur de l'input type text
    $("input").keyup(function ()
    {
        $("#nom").text($('input[type="text"]').val());
    });


    // Le bouton applique la couleur qu'il possède en data
    $(".color").click(function ()
    {
        var name = $("#nom");
        $(this).changeColor(name, $(this).attr("data"));
    });

    $("#changeName").click(function ()
    {
        $('#texte').text("toto").changeName("toto");
    });
});


$.fn.changeColor = function (name, color)
{
    $(name).fadeOut(500, function ()
    {
        $(this).css("color", color);
        $(this).fadeIn(500);
    });
};


$.fn.changeName = function (name)
{
    $(this).fadeOut(500, function()
    {
       $(this).text(name);
       $(this).fadeIn(500);
    });
};