$(document).ready(function()
{
    $("input").keyup(function ()
    {
        console.log("a");
        $("#nom").text($('input[type="text"]').val());
    });

    $("#rouge").click(function()
    {
        $("#nom").css("color", 'red');
    });

    $("#bleu").click(function()
    {
        $("#nom").css("color", 'blue');
    });

    $("#vert").click(function()
    {
        $("#nom").css("color", 'green');
    });
});