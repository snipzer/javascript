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
            div.style.display = "none";
        }
    }
}