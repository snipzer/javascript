<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<main>
    <h1></h1>
    <p>Votre nom est : <strong id="nom" ></strong></p>
    <p id="texte"></p>
    <p>
        <input type="text" onkeyup="getNom()"/>
        <button onclick="aleaColor()">Change color !</button>
        <button onclick="aleaBackground()">Change background !</button>

    </p>
    <p>Date: <span id="heure"></span><span id="minute"></span><span id="seconde"></span></p>
    <p>
        <button id="+1H" onclick="showDate().setHours()">+1H</button>
        <button id="-1H">-1H</button>
        <button id="+1M">+1M</button>
        <button id="-1H">-1M</button>
        <button id="+10S">+10S</button>
        <button id="-10S">-10S</button>
    </p>
</main>

<script src="js/base.js"></script>
<noscript>
    Javascript est désactivé sur votre navigateur.
</noscript>
</body>
</html>
