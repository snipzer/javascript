<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/horloge.css">
    <title>Document</title>
</head>
<body>
<div class="conteneur-horloge">
    <p class="horloge"><span id="heure"></span><span id="minute"></span><span id="seconde"></span></p>
    <p class="btn-master">
        <button id="+1H" class="btn" onclick="horloge.modif('H', '+')">+1H</button>
        <button id="-1H" class="btn" onclick="horloge.modif('H', '-')">-1H</button>
        <button id="+1M" class="btn" onclick="horloge.modif('M', '+')">+1M</button>
        <button id="-1H" class="btn" onclick="horloge.modif('M', '-')">-1M</button>
        <button id="+10S" class="btn" onclick="horloge.modif('S', '+')">+10S</button>
        <button id="-10S" class="btn" onclick="horloge.modif('S', '-')">-10S</button>
        <button id="pause" class="btn" onclick="horloge.stop()">Pause</button>
        <button id="reset" class="btn" onclick="horloge.reset()">Reset</button>
    </p>
</div>
</body>
<script src="js/horloge.js"></script>
</html>