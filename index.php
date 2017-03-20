<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/horloge.css">
    <title>Document</title>
</head>
<body>
<main>
    <section>
        <article>
            <h1></h1>
            <p>Votre nom est : <strong id="nom" ></strong></p>
            <p id="texte"></p>
            <p>
                <input type="text" onkeyup="getNom()"/>
                <button onclick="aleaColor()">Change color !</button>
                <button onclick="aleaBackground()">Change background !</button>

            </p>
        </article>
    </section>
    <section>
        <article>
            <ul>
                <li><a href="horloge.php">Voir l'horloge !</a></li>
                <li><a href="square.php">Voir le square !</a></li>
                <li><a href="todolist.php">Voir la todoList !</a></li>
            </ul>
        </article>
    </section>
</main>

<script src="js/base.js"></script>
<script src="js/horloge.js"></script>
<noscript>
    Javascript est désactivé sur votre navigateur.
</noscript>
</body>
</html>
