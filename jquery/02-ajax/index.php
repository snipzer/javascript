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
        <h2>Formulaire géré avec Ajax</h2>
        <form id="form">
            <input type="text" id="username" name="username" />
            <input type="submit" value="POST !">
        </form>
        <button id="getButton">GET !</button>
        <p id="result"></p>
    </article>
    <article>
        <form id="form2">
            <input type="text" id="username2" />
            <input type="submit" value="Submit">
        </form>
        <h2 id="hacheDe"></h2>
    </article>
</section>
</body>
<script src="js/jquery-3.2.0.min.js"></script>
<script src="js/ajax.js"></script>

</html>