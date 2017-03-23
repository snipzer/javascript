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
        $("#nom").changeColor([$(this).attr("data")]);
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
    $.fn.changeColor = function (color)
    {
        this.each(function (i) {
            $(this).fadeOut(500, function ()
            {
                $(this).css("color", color[i] ? color[i] : color[i%color.length]);
                $(this).fadeIn(500);
            });
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
