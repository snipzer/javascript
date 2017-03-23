$(document).ready(function ()
{
    // La div id nom récupère la valeur de l'input type text
    $("input").keyup(function ()
    {
        $("#nom").text($('input[type="text"]').val());
    });


    // Le bouton applique la couleur qu'il possède en data
    $(".color").click(function ()
    {
        $("#nom").changeColor({colors: [$(this).attr("data")]});
    });

    // Au click, ajoute
    $("#changeName").click(function ()
    {
        $('#texte').changeName("tata");
    });

    $(".paragraphe").click(function ()
    {
        $(".paragraphe").changeColor({
            colors: ["blue", "green", "red"], success: function ()
            {
                alert("totooooooo!!!!!!")
            }
        })
    });

});
(function ($)
{
    /*
     // Plugin changeColor
     $.fn.changeColor = function (colors)
     {
     this.each(function (i) {
     $(this).fadeOut(500, function ()
     {
     $(this).css("color", colors[i] ? colors[i] : colors[i%color.length]);
     $(this).fadeIn(500);
     });
     });
     return this;
     };
     */
    // Plugin changeColor
    $.fn.changeColor = function (options)
    {
        var settings = $.extend({
            colors: ['red', 'blue'],
            success: null
        }, options);

        var length = $(this).length - 1;

        this.each(function (i)
        {
            $(this).fadeOut(500, function ()
            {
                $(this).css("color", settings.colors[i] ? settings.colors[i] : settings.colors[i % settings.colors.length]);
                $(this).fadeIn(500, function ()
                {
                    if (i === length - 1 && settings.success)
                    {
                        settings.success();
                    }
                });
            });
        });
        return this;
    };

// Plugin changeName
    $.fn.changeName = function (name)
    {
        $(this).fadeOut(500, function ()
        {
            $(this).text(name);
            $(this).fadeIn(500);
        });
        return this;
    };
})(jQuery);
