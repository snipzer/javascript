// Constructeur de Slider
function Slider(idElement, images, param)
{
    // Assignation du tableau de paramètre optionnel
    this.param = Object.assign({delay: 1000, imageWidth: "250px", imageHeight: "250px"}, param);
    this.element = document.querySelector("#" + idElement);
    this.images = images;
    this.delay = this.param["delay"] || 1000;
    this.index = 0;
    this.imageWidth = this.param["imageWidth"];
    this.imageHeight = this.param["imageHeight"];
    this.generate();
    this.toggle();
}

// Fonction qui créer un bouton
Slider.prototype.createButton = function (parent, name, fonction)
{
    var button = document.createElement("button");
    button.className = name;
    button.style.width = "50px";
    button.style.height = "30px";
    button.onclick = fonction;

    parent.appendChild(button);
};

// Fonction qui va généré tout le html
Slider.prototype.generate = function ()
{
    // Génération du conteneur de l'image
    var img = document.createElement("img");
    img.className = "imageHolder";
    img.style.width = this.imageWidth;
    img.style.height = this.imageHeight;
    // Ajout de l'image
    img.src = this.images[this.index];
    this.element.appendChild(img);

    // Génération des boutons
    var divButton = document.createElement("div");
    divButton.className = "buttonHolder";
    this.createButton(divButton, "fa fa-play", this.toggle.bind(this));
    this.createButton(divButton, "fa fa-forward", this.next.bind(this));
    this.createButton(divButton, "fa fa-backward", this.previous.bind(this));
    this.createButton(divButton, "fa fa-random", this.random.bind(this));

    // Ajout des éléments à la page
    this.element.appendChild(divButton);
};

// Bouton play/pause
Slider.prototype.toggle = function ()
{
    // Si il n'y a pas d'interval
    if (!this.interval)
    {
        // Créer un interval avec la fonction next (démarre le slider)
        this.interval = setInterval(this.next.bind(this), this.delay);
        // Passe l'icone du bouton sur pause
        this.element.querySelector(".fa-play").className = "fa fa-pause";
    }
    else
    {
        // Arrete le slider
        clearInterval(this.interval);
        this.interval = null;
        // Et change l'image pause pour l'image play
        this.element.querySelector(".fa-pause").className = "fa fa-play";
    }
};

// Bouton qui affiche la slider suivante
Slider.prototype.next = function ()
{
    // Si l'index est égale à la taille du tableau d'image-1 alors passe le à zéros, sinon passe à l'index suivant
    this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;

    // Affiche la nouvelle image
    this.element.querySelector(".imageHolder").src = this.images[this.index];
};

// Bouton qui affiche la slider précédente
Slider.prototype.previous = function ()
{
    // Si l'index est égale à 0 alors passe a la dernière image, sinon diminue d'un index
    this.index = this.index === 0 ? this.images.length - 1 : this.index - 1;
    // Affiche la nouvelle image
    this.element.querySelector(".imageHolder").src = this.images[this.index];
};

// Bouton qui affiche un slider random
Slider.prototype.random = function ()
{

    var index;
    // Fait
    do
    {
        // index est égale à un nombre entier arrondie à l'inférieur allant de 0 à la taille du tableau d'image
        index = Math.floor(Math.random() * (this.images.length));
    } // Tant que l'index est égale à l'index précédent
    while (index === this.index);

    // On assigne la valeur du nouvel index
    this.index = index;

    // On affiche la nouvelle image
    this.element.querySelector(".imageHolder").src = this.images[this.index];
};