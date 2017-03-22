function Slider(idElement, images, param)
{
    this.param = param || {delay: 1000, imageWidth: "250px", imageHeight: "250px"};
    this.element = document.querySelector("#"+idElement);
    this.images = images;
    this.delay = this.param["delay"] || 1000;
    this.index = 0;
    this.imageWidth = this.param["imageWidth"];
    this.imageHeight = this.param["imageHeight"];
    this.generate();
    this.toggle();
}

Slider.prototype.createButton = function (parent, name, fonction)
{
    var button = document.createElement("button");
    button.className = name;
    button.style.width = "50px";
    button.style.height = "30px";
    button.onclick = fonction;

    parent.appendChild(button);
};

Slider.prototype.generate = function ()
{
    // Génération du conteneur de l'image
    var img = document.createElement("img");
    img.className = "imageHolder";
    img.style.width = this.imageWidth;
    img.style.height = this.imageHeight;

    img.src = this.images[this.index];
    this.element.appendChild(img);

    // Génération des boutons
    var divButton = document.createElement("div");
    divButton.className = "buttonHolder";
    this.createButton(divButton, "fa fa-pause", this.toggle.bind(this));
    this.createButton(divButton, "fa fa-forward", this.next.bind(this));
    this.createButton(divButton, "fa fa-backward", this.previous.bind(this));
    this.createButton(divButton, "fa fa-random", this.random.bind(this));

    // Ajout des éléments à la page
    this.element.appendChild(img);
    this.element.appendChild(divButton);
};

Slider.prototype.toggle = function() {
    if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
    } else {
        this.interval = setInterval(this.next.bind(this), this.delay);
    }
};

Slider.prototype.next = function ()
{
    this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;

    this.element.querySelector(".imageHolder").src = this.images[this.index];
};

Slider.prototype.previous = function ()
{
    this.index = this.index === 0 ? this.images.length - 1 : this.index - 1;
    this.element.querySelector(".imageHolder").src = this.images[this.index];
};

Slider.prototype.random = function ()
{
    var index;
    do {
        index = Math.floor(Math.random()*(this.images.length));
    } while(index === this.index)

    this.index = index;

    this.element.querySelector(".imageHolder").src = this.images[this.index];
};