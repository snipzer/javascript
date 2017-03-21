<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/square.css">
    <title>Document</title>
</head>
<body>
<section>
    <article>
        <header>
            <button id="refresh">Start !</button>
            <button id="explosion">Explosion !</button>
        </header>
        <div class="conteneur">

        </div>
    </article>
</section>
</body>
<script src="js/Square.js"></script>
<script src="js/Explosion.js"></script>
<script>
    new Square();
    new Explosion();
</script>
</html>