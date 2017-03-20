var bob = new Person("Bob");
document.querySelector(".sayHi").onclick = bob.sayHi.bind(bob);
document.querySelector(".sayBye").onclick = bob.sayBye.bind(bob);