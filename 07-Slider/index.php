<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <title>Document</title>
</head>
<body>
    <div id="sliders1" ></div>
    <div id="sliders2" ></div>
</body>

<script src="js/sliderTest.js"></script>
<script>
    var tabImages = ["image/shadock1.jpg", "image/shadock2.jpg", "image/shadock3.jpg", "image/shadock4.jpg", "image/shadock5.jpg", "image/shadock6.jpg", "image/shadock7.jpg"];

    var param1 = {
        delay: 2000,
        imageWidth: "250px",
        imageHeight: "250px"
    };

    SLIDER.generate("sliders1", tabImages, param1);
    SLIDER.generate("sliders2", tabImages, param1);
</script>
</html>