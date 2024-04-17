"use strict";
const ages = [4, 3, 4, 5];
const users = [
    { id: 1, name: "harol" },
    { id: 2, name: "lilo" },
];
const dogs = [
    { name: "firulais", age: 3, owner: users[0] },
    { name: "plumas", age: 1, owner: users[1] },
];
//----------------------------------------------------
const echo = (args) => args;
console.log(echo("hello world"));
//----------------------------------------------------
const printArray = (arr) => {
    for (const e of arr) {
        console.log(e);
    }
};
printArray(users);
printArray(dogs);
//----------------------------------------------------
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
function identity(arg) {
    return arg;
}
let myIdentity = identity;
