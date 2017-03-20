var bob = new Person("Bob", "profile1");
var profile1 = document.querySelector("#profile1");
var profile2 = document.querySelector("#profile2");
profile1.querySelector(".sayHi").onclick = bob.sayHi.bind(bob);
profile1.querySelector(".sayBye").onclick = bob.sayBye.bind(bob);

var alice = new Person("Alice", "profile2");
profile2.querySelector(".sayHi").onclick = alice.sayHi.bind(alice);
profile2.querySelector(".sayBye").onclick = alice.sayBye.bind(alice);