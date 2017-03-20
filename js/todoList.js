// Add a checked symbol when cliking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (event){
    if(event.target.tagName === 'LI')
    {
        event.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement()
{
    // On crée un LI vierge
    var li = document.createElement("li");
    // On stocke la valeur de l'input
    var inputValue = document.querySelector("#myInput").value;
    // On ajoute la valeur de l'input dans le li
    var t = document.createTextNode(inputValue);
    li.appendChild(t);


    // Si le champ de formulaire est vide demande a l'utilisateur de le remplir
    if(inputValue === "")
    {
        alert("You must write something...");
    }
    // Sinon ajoute le li au ul
    else
    {
        document.querySelector("#myUL").appendChild(li);
    }
    // Remise a zéros de l'input
    document.querySelector("#myInput").value = "";

    // Create a close button and append it to each list item
    var span = document.createElement("span");
    var txt = document.createTextNode("DELETE");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Click on a close button to hide the current list item
    var close = document.querySelectorAll(".close");

    for(i = 0; i < close.length; i++)
    {
        close[i].onclick = function ()
        {
            var div = this.parentElement;
            document.querySelector("#myUL").removeChild(div);
        }
    }


    // Create a DOWN button and append it to each list item
    var spanDown = document.createElement("span");
    var txtDown = document.createTextNode("DOWN");

    spanDown.className = "down";
    spanDown.appendChild(txtDown);
    li.appendChild(spanDown);

    // Click on a up button to up the current list item
    var Down = document.querySelectorAll(".down");

    for(i = 0; i < Down.length; i++)
    {
        Down[i].onclick = function ()
        {
            /*
            var liNext = this.parentElement.nextElementSibling.nextElementSibling;
            var thisLi = this.parentElement;
            document.querySelector("#myUL").insertBefore(thisLi, liNext);
            */
            var liNext = this.parentElement.nextElementSibling;
            if(liNext === null)
            {
                liNext = document.querySelector("#myUL").firstElementChild;
                document.querySelector("#myUL").insertBefore(this.parentElement, liNext);
            }
            else
            {
                document.querySelector("#myUL").insertBefore(liNext, this.parentElement);
            }

        }
    }

    // Create a UP button and append it to each list item
    var spanUp = document.createElement("span");
    var txtUp = document.createTextNode("UP");

    spanUp.className = "up";
    spanUp.appendChild(txtUp);
    li.appendChild(spanUp);

    // Click on a up button to up the current list item
    var Up = document.querySelectorAll(".up");

    for(i = 0; i < Up.length; i++)
    {
        Up[i].onclick = function ()
        {
            var liBefore = this.parentElement.previousElementSibling;
            var thisLi = this.parentElement;
            document.querySelector("#myUL").insertBefore(thisLi, liBefore);
        }
    }
}
