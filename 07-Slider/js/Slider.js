function Slider(idElement, images, delay)
{
    this.element = document.querySelector("#"+idElement);
    this.images = images;
    this.delay = delay;
    this.generate();
}

Slider.prototype.createButton = function (name, fonction)
{
    var button = document.createElement("button");
    button.className = name;
    button.style.width = "50px";
    button.style.height = "30px";
    button.onclick = fonction;
    button.innerText = name;

    return button;
};

Slider.prototype.generate = function ()
{
    // Génération du conteneur de l'image
    var img = document.createElement("img");
    img.className = "imageHolder";

    img.src = "image/"+this.images[0]+".jpg";
    this.element.appendChild(img);


    // Génération des boutons
    var divButton = document.createElement("div");
    divButton.className = "buttonHolder";
    divButton.appendChild(this.createButton("play", this.play));
    divButton.appendChild(this.createButton("pause", this.pause));
    divButton.appendChild(this.createButton("next", this.next));
    divButton.appendChild(this.createButton("previous", this.previous));
    divButton.appendChild(this.createButton("random", this.random));

    // Ajout des éléments à la page

    this.element.appendChild(divButton);
};

Slider.prototype.play = function ()
{
    console.log("play");
};

Slider.prototype.pause = function ()
{
    console.log("pause");
};

Slider.prototype.next = function ()
{
    console.log("next");
};

Slider.prototype.previous = function ()
{
    console.log("previous");
};

Slider.prototype.random = function ()
{
    console.log("random");
};