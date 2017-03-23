$(document).ready(function ()
{
    $('#form').submit(function (event)
    {
        event.preventDefault();
        $.ajax('index.php',
            {
                method: 'POST',
                data:
                    {
                        username: $('#username').val()
                    },
                success: function(response)
                {
                    console.log(response);
                },
                error: function (err)
                {
                    console.error(err);
                }
            });
    });
});