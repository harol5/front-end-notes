"use strict";
class Cat {
    constructor(name, age, numOfLives) {
        this.name = name;
        this.age = age;
        this.numOfLives = numOfLives;
    }
}
const myCat = new Cat("milo", 2, 7);
console.log(myCat.age);
