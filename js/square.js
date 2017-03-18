var square = document.querySelector(".square");

square.style.top = "150px";
square.style.bottom = "150px";
square.style.left = "150px";
square.style.right = "150px";


function move(event)
{
    switch(event.keyCode)
    {
        // Haut
        case 38:
            // Récupère la valeur
            var top = square.style.top.replace("px", "");
            // On la transforme en int et on ajoute 10
            var valtop = (parseInt(top)-10);
            // On reformate la valeur avec px
            valtop = valtop+"px";
            // Et on la réassigne
            square.style.top = valtop;
            break;
        // Bas
        case 40:
            // Récupère la valeur
            top = square.style.top.replace("px", "");
            // On la transforme en int et on ajoute 10
            valtop = (parseInt(top)+10);
            // On reformate la valeur avec px
            valtop = valtop+"px";
            // Et on la réassigne
            square.style.top = valtop;
            break;
        // Gauche
        case 37:
            // Récupère la valeur
            left = square.style.left.replace("px", "");
            // On la transforme en int et on ajoute 10
            valleft = (parseInt(left)-10);
            // On reformate la valeur avec px
            valleft = valleft+"px";
            // Et on la réassigne
            square.style.left = valleft;
            break;
            break;
        // Droite
        case 39:
            // Récupère la valeur
            left = square.style.left.replace("px", "");
            // On la transforme en int et on ajoute 10
            valleft = (parseInt(left)+10);
            // On reformate la valeur avec px
            valleft = valleft+"px";
            // Et on la réassigne
            square.style.left = valleft;
            break;
        default:
            break;
    }
}
