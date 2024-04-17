"use strict";
// basic types
let id = 5;
let myName = "harol";
let isMale = true;
let a = "i can be any type";
// array with only type number
let ids;
ids = [1, 2, 3];
let rows;
rows = [
    ["9", "9", "10"],
    ["11", "13"],
];
// Tuple: allows only types declared inside the brackets. must be same length.
let nums;
nums = [3, "4"];
// Multidimentional array with tuple type;
let numsArr;
numsArr = [
    [1, "1"],
    [2, "2"],
];
let test;
test = { name: "hello", age: 45, canDrink: true };
let x;
x = [
    { name: "harol", age: 45 },
    { name: "pedro", age: 56 },
];
// Union: allows multiple types.s
let pid;
pid = 23;
pid = "23";
let driver;
driver = { name: "pedro", age: 23 };
driver = { name: "pedro", age: 23, under18: true };
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up); //returns 0;
const newUser = { id: 121, name: "harol" };
let firulais = { name: "firulais", age: 2 };
let tyson = { name: "tyson", age: 6, owner: newUser };
const add2 = (a, b) => {
    return a + b;
};
const substract = (a, b) => {
    return a - b;
};
//type assertion. tell compiler we want to convert variable into another type.
let cid = 1;
let customerId = cid;
let toStringCus = customerId;
console.log(typeof toStringCus);
const bmw = {
    name: "bmw",
    id: 1,
};
const add = (x, y) => x + y;
//classes.
class Human {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    greet() {
        console.log("hello");
    }
}
//================================================FUNCTIONS.
//--------------arg:type,arg:type--return type
function addNum(x, y) {
    return x + y;
}
function printCar(car) {
    console.log(car);
}
// void
function print(a) {
    console.log(a);
}
// optional param
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
// rest operator
const total = (a, ...nums) => {
    return a + nums.reduce((prev, crr) => prev + crr);
};
