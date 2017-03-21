function Person(name, elemId){
    this.name = name;
    this.element = document.querySelector('#'+elemId);
    this.bindEvent();
}

Person.prototype.sayHi = function ()
{
    this.element.querySelector(".message").innerText = "Bonjour ! my name is "+this.name;
};

Person.prototype.sayBye = function ()
{
    this.element.querySelector(".message").innerText = "Au revoir !";
};

Person.prototype.bindEvent = function ()
{
    this.element.querySelector(".name").innerText = this.name;
    this.element.querySelector(".sayHi").onclick = Person.prototype.sayHi.bind(this);
    this.element.querySelector(".sayBye").onclick = Person.prototype.sayBye.bind(this);
};
