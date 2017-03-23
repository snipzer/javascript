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
        $(this).changeColor($("#nom"), $(this).attr("data"));
    });

    // Au click, ajoute
    $("#changeName").click(function ()
    {
        $('#texte').changeName("tata");
    });
});
(function($)
{
    // Plugin changeColor
    $.fn.changeColor = function (name, color)
    {
        $(name).fadeOut(500, function ()
        {
            $(this).css("color", color);
            $(this).fadeIn(500);
        });

        return this;
    };

// Plugin changeName
    $.fn.changeName = function (name)
    {
        $(this).fadeOut(500, function()
        {
            $(this).text(name);
            $(this).fadeIn(500);
        });
        return this;
    };
})(jQuery);
