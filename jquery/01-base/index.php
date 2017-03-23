<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<section>
    <article>
        <h1></h1>
        <p>Votre nom est : <strong id="nom" ></strong></p>
        <p id="texte"></p>
        <p class="groupeParagraphe">
        <?php for($i = 0; $i <= 10; $i++):?>
        <p class="paragraphe">Paragraphe n°<?php echo $i; ?></p>
        <?php endfor; ?>
        </p>
        <p>
            <input type="text"/>
            <button class="color" data="red">Rouge</button>
            <button class="color" data="blue">Bleu</button>
            <button class="color" data="green">Vert</button>
            <button id="changeName" >Change Name !</button>
            <button id="sayHi" ></button>
        </p>
    </article>
</section>
</body>
<script src="js/jquery-3.2.0.min.js"></script>
<script src="js/color.js"></script>
<script>
    /*
    // Execution après chargement de la page avec Jquery
    $(function ()
    {
        alert("Hello world !");
    });

    // La même mais en javascript
    window.onload = function ()
    {
        alert("titi");
    }
    */
</script>
</html>