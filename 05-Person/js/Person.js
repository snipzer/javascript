function Person(name){
    this.name = name;
    document.querySelector(".name").innerText = this.name;
}

Person.prototype.sayHi = function ()
{
    document.querySelector(".message").innerText = "Bonjour ! my name is "+this.name;
};

Person.prototype.sayBye = function ()
{
    document.querySelector(".message").innerText = "Au revoir !";
};