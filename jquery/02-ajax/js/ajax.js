$(document).ready(function ()
{

    $('#form').submit(function (event)
    {
        event.preventDefault();
        $.ajax('index.php',
            {
                method: 'POST',
                data: {
                    username: $('#username').val()
                },
                success: function (response)
                {
                    console.log(response);
                },
                error: function (err)
                {
                    console.error(err);
                }
            });
    });

    $('#getButton').click(function (event)
    {
        event.preventDefault();
        $.ajax('https://jsonplaceholder.typicode.com/posts/1',
            {
                method: 'GET',
                success: function (response)
                {
                    $("#result").html("UserId: " + response.userId + "<br/>Titre: " + response.title + "<br/>Body: " + response.body);
                    console.log(response);
                },
                error: function (err)
                {
                    console.error(err);
                }
            });
    });


    $('#form2').submit(function (event)
    {
        event.preventDefault();
        $.ajax('index.php',
            {
                method: "POST",
                data:
                {
                    username: $("#username2").val()
                },
                success: function (response)
                {
                    $("#hacheDe").text(JSON.parse(response).username);
                }
            });
    });



});


