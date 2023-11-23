"use strict";
console.log("PersonClass.js file was loaded");

class Person {
  // spec funkcija kuri yra paleidziama, kai sukuriamas objektas
  constructor(argName, argAge, argTown) {
    console.log("sukurtas objektas");
    this.name = argName;
    this.age = argAge;
    this.town = argTown;
  }
}
const user3 = new Person("Rokas", 31, "Vilnius");
console.log("user3 ===", user3);
const user1 = {
  name: "James",
  age: 25,
  town: "London",
};
