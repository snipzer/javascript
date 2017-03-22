function Todo(name, idRef)
{
    this.name = name;
    this.element = document.querySelector('#'+idRef);
    this.ul = this.element.querySelector(".list");
    this.taskName = this.element.querySelector(".taskName");
    this.bindEvent();
}

Todo.prototype.bindEvent = function ()
{
    this.element.querySelector("h2").innerText = this.name;
    console.log();
    this.element.querySelector(".taskForm").lastElementChild.onclick = Todo.prototype.createTask.bind(this);
};

Todo.prototype.createTask = function (event)
{
    event.preventDefault();
    // On créé l'élement
    var li = document.createElement('li');
    // Checkbox
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    checkBox.onclick = this.checkTask;
    // Texte
    var span = document.createElement('span');
    span.innerText = this.taskName.value;

    // Boutons
    var deleteEl = document.createElement('button');
    deleteEl.innerText = 'X';

    deleteEl.onclick = this.deleteTask.bind(this);

    var upEl = document.createElement('button');
    upEl.innerText = '^';

    upEl.onclick = this.up.bind(this);

    var downEl = document.createElement('button');
    downEl.innerText = 'v';

    downEl.onclick = this.down.bind(this);

    // On ajoute tout nos élément à notre <li>
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteEl);
    li.appendChild(upEl);
    li.appendChild(downEl);

    // On ajoute notre <li> à notre <ul>
    this.ul.appendChild(li);

    // On vide l'input
    this.taskName.value = '';
};


Todo.prototype.checkTask = function () {
    var text = this.parentElement.querySelector('span');

    text.style.textDecoration = this.checked ? 'line-through' : '';
};

Todo.prototype.deleteTask = function (event) {
    var button = event.target;
    this.ul.removeChild(button.parentElement);
};

Todo.prototype.up= function (event) {
    var button = event.target;
    if (!button.parentElement.previousElementSibling) return;

    this.ul.insertBefore(button.parentElement, button.parentElement.previousElementSibling);
};

Todo.prototype.down = function (event) {
    var button = event.target;
    if (!button.parentElement.nextElementSibling) return;

    this.ul.insertBefore(button.parentElement.nextElementSibling, button.parentElement);
};
