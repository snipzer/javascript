function Square()
{
    this.createSquare();
    this.bindEvent();
}



Square.prototype.createSquare = function ()
{
    var square = document.createElement("div");
    var field = document.querySelector(".conteneur");

    square.className = "square";
    square.style.top = "150px";
    square.style.bottom = "150px";
    square.style.left = "150px";
    square.style.right = "150px";

    field.appendChild(square);
};

Square.prototype.deleteSquare = function ()
{
    document.querySelector(".conteneur").removeChild(document.querySelector(".square"));
    this.createSquare();
};

Square.prototype.move = function (event)
{
    var square = document.querySelector(".square");
    switch (event.keyCode)
    {
        // Haut
        case 38:
            // Récupère la valeur
            var top = square.style.top.replace("px", "");
            // On la transforme en int et on ajoute 10
            var valtop = (parseInt(top) - 10);
            // On reformate la valeur avec px
            if(valtop < 0)
            {
                this.deleteSquare();
            }
            else
            {
                valtop = valtop + "px";
                // Et on la réassigne
                square.style.top = valtop;
            }
            break;
        // Bas
        case 40:
            top = square.style.top.replace("px", "");
            valtop = (parseInt(top) + 10);
            if(valtop > 750)
            {
                this.deleteSquare();
            }
            else
            {
                valtop = valtop + "px";
                square.style.top = valtop;
            }
            break;
        // Gauche
        case 37:
            left = square.style.left.replace("px", "");
            valleft = (parseInt(left) - 10);
            if(valleft < 0)
            {
                this.deleteSquare();
            }
            else
            {
                valleft = valleft + "px";
                square.style.left = valleft;
            }
            break;
        // Droite
        case 39:
            left = square.style.left.replace("px", "");
            valleft = (parseInt(left) + 10);
            if(valleft > 750)
            {
                this.deleteSquare();
            }
            else
            {
                valleft = valleft + "px";
                square.style.left = valleft;
            }
            break;
        default:
            break;
    }
};

Square.prototype.bindEvent = function ()
{
    document.querySelector("#refresh").onclick = Square.prototype.deleteSquare.bind(this);
    document.querySelector("body").onkeydown = Square.prototype.move.bind(this);
};