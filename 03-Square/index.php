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
<body onkeydown="move(event)" >
<section>
    <article>
        <header>
            <button onclick="createSquare()">Start !</button>
            <button onclick="deleteSquare()">Stop !</button>
            <button onclick="createExplosion()">Explosion !</button>
        </header>
        <div class="conteneur">

        </div>
    </article>
</section>
</body>
<script src="js/square.js"></script>
</html>