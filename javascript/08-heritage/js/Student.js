function Student (name, subject)
{
    // Quand je construit un étudiant, je construit une personne
    Person.call(this, name);
    this.subject = subject;
}

// Le prototype de student est le prototype de personne
Student.prototype = Object.create(Person.prototype);
// On assigne le constructeur de student à student car a la ligne d'avant il a pris celui de Person
Student.prototype.constructor = Student;

Student.prototype.sayHi = function ()
{
    alert("Bonjour je m'appelle " + this.name + " et j'étudie " + this.subject);
};