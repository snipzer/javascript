var SLIDER = (function ()
{
    /** ATTRIBUT PRIVEE **/


    /** METHOD PRIVEE **/
    function construct(idElement, images, param)
    {
        var Slider = {};
            Slider.PARAM = Object.assign({delay: 1000, imageWidth: "250px", imageHeight: "250px"}, param);
            Slider.element = document.querySelector("#"+ idElement);
            Slider.tabImages = images;
            Slider.delay = Slider.PARAM['delay'];
            Slider.index = 0;
            Slider.imageWidth = Slider.PARAM['imageWidth'];
            Slider.imageHeight = Slider.PARAM['imageHeight'];
    }

    function createButton(parent, name, fonction)
    {
        var button = document.createElement("button");
        button.className = name;
        button.style.width = "50px";
        button.style.height = "50px";
        button.onclick = fonction;

        parent.appendChild(button);
    }

    // Bouton play/pause
    function toggle()
    {
        // Si il n'y a pas d'interval
        if (!interval)
        {
            // Créer un interval avec la fonction next (démarre le slider)
            interval = setInterval(Slider.next, Slider.delay);
            // Passe l'icone du bouton sur pause
            Slider.element.querySelector(".fa-play").className = "fa fa-pause";
        }
        else
        {
            // Arrete le slider
            clearInterval(interval);
            interval = null;
            // Et change l'image pause pour l'image play
            Slider.element.querySelector(".fa-pause").className = "fa fa-play";
        }
    }

    // Bouton qui affiche la slider suivante
    function next()
    {
        // Si l'index est égale à la taille du tableau d'image-1 alors passe le à zéros, sinon passe à l'index suivant
        index = index === Slider.tabImages.length - 1 ? 0 : index + 1;

        // Affiche la nouvelle image
        Slider.element.querySelector(".imageHolder").src = Slider.tabImages[index];
    }

    // Bouton qui affiche la slider précédente
    function previous()
    {
        // Si l'index est égale à 0 alors passe a la dernière image, sinon diminue d'un index
        index = index === 0 ? Slider.tabImages.length - 1 : index - 1;
        // Affiche la nouvelle image
        Slider.element.querySelector(".imageHolder").src = Slider.tabImages[index];
    }

    // Bouton qui affiche un slider random
    function random()
    {

        var indexTemp;
        // Fait
        do
        {
            // index est égale à un nombre entier arrondie à l'inférieur allant de 0 à la taille du tableau d'image
            indexTemp = Math.floor(Math.random() * (Slider.tabImages.length));
        } // Tant que l'index est égale à l'index précédent
        while (indexTemp === Slider.index);

        // On assigne la valeur du nouvel index
        Slider.index = indexTemp;

        // On affiche la nouvelle image
        this.element.querySelector(".imageHolder").src = Slider.images[Slider.index];
    }

    /** ATTRIBUT PUBLIC **/
    Slider.moduleProperty = 1;


    /** METHOD PUBLIC **/
    // Fonction qui va généré tout le html
    Slider.generate = function (idElement, images, param)
    {
        construct(idElement, images, param);
        // Génération du conteneur de l'image
        var img = document.createElement("img");
        img.className = "imageHolder";
        img.style.width = Slider.imageWidth;
        img.style.height = Slider.imageHeight;
        // Ajout de l'image
        console.log(Slider);
        img.src = Slider.tabImages[Slider.index];
        Slider.element.appendChild(img);

        // Génération des boutons
        var divButton = document.createElement("div");
        divButton.className = "buttonHolder";
        createButton(divButton, "fa fa-play", toggle);
        createButton(divButton, "fa fa-forward", next);
        createButton(divButton, "fa fa-backward", previous);
        createButton(divButton, "fa fa-random", random);

        // Ajout des éléments à la page
        Slider.element.appendChild(divButton);
    };

    return Slider;
}());