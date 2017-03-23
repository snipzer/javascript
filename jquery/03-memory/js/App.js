var images = ["image/shadock1.jpg", "image/shadock2.jpg", "image/shadock3.jpg", "image/shadock4.jpg", "image/shadock5.jpg", "image/shadock6.jpg", "image/shadock7.jpg"];

var memory = new Memory(images);

memory.genGame();


$(".conteneurSecondaire").click(function ()
{
    $(".imageHolder").each(function ()
    {
        this.show();
    });
});