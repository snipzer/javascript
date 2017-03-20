function Person(name, elemId){
    this.name = name;
    this.element = document.querySelector('#'+elemId);
    this.element.querySelector(".name").innerText = this.name;
}

Person.prototype.sayHi = function ()
{
    this.element.querySelector(".message").innerText = "Bonjour ! my name is "+this.name;
};

Person.prototype.sayBye = function ()
{
    this.element.querySelector(".message").innerText = "Au revoir !";
};


