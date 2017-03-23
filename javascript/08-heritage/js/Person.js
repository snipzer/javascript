function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function()
{
  alert("Bonjour je m'appelle "+this.name);
};

Person.prototype.sayBye = function ()
{
  alert("Bye !");
};