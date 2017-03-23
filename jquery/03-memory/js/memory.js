function Memory (images)
{
    this.images = images;
}

Memory.prototype.genGame = function ()
{
    this.genDiv(this.images.length*2);
};

Memory.prototype.genDiv = function (nbDiv)
{
    var j = 0;
    var divMother =  document.createElement("div");
    divMother.className = "conteneurPrimaire";
    divMother.style.width = "100%";
    divMother.style.height = "800px";
    divMother.style.border = "4px solid black";

    for(var i = 0; i < nbDiv; i++)
    {
        // Génération du conteneur de l'image
        var image = document.createElement("img");
        image.className = "imageHolder";
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.display = "none";

        // Ajout de l'image
        if(i >= (nbDiv/2))
        {
            image.src = this.images[j++];
        }
        else
        {
            image.src = this.images[i];
        }

        var divChild = document.createElement("div");
        divChild.className = "conteneurSecondaire";
        divChild.style.width = "30%";
        divChild.style.height = "15%";
        divChild.style.margin = "15px";
        divChild.style.display = "inline-block";
        divChild.style.float = "left";
        divChild.style.border = "2px solid black";

        divChild.appendChild(image);
        divMother.appendChild(divChild);
    }
    document.querySelector("body").appendChild(divMother);
};

