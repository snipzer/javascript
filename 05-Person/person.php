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
<section id="profile" >
    <p class="name" ></p>
    <p class="message" ></p>
    <p>
        <button class="sayHi" >Say Hi !</button>
        <button class="sayBye" >Say Bye !</button>
    </p>
</section>
<script src="js/Person.js"></script>
<script>
    // TODO Fragmenté cette partie dans un app.js
    var bob = new Person("Bob");
    document.querySelector(".sayHi").onclick = bob.sayHi.bind(bob);
    document.querySelector(".sayBye").onclick = bob.sayBye.bind(bob);
</script>
</body>
</html>