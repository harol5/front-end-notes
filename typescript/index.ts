// basic types
let id: number = 5;
let myName: string = "harol";
let isMale: boolean = true;
let a: any = "i can be any type";

// array with only type number
let ids: number[];
ids = [1, 2, 3];

// Tuple: allows only types declared inside the brackets.
let nums: [number, string] = [1, "2"];
let numsArr: [number, string][];
numsArr = [
  [1, "1"],
  [2, "2"],
];

// Union: allows multiple types.s
let pid: number | string;
pid = 23;
pid = "23";

//enum
enum Direction1 {
  up,
  down,
  left,
  right,
}
console.log(Direction1.up); //returns 0;

// Objects
type User = {
  id: number;
  name: string;
};
const newUser: User = {
  id: 121,
  name: "harol",
};

//type assertion. tell compiler we want to convert variable into another type.
let cid: any = 1;
let customerId = <number>cid;

//functions.
//--------------arg:type,arg:type--return type
function addNum(x: number, y: number): number {
  return x + y;
}

function print(a: string): void {
  console.log(a);
}

//interfaces
interface Car {
  readonly name: string;
  id: number;
  isLuxury?: boolean;
}
const bmw: Car = {
  name: "bmw",
  id: 1,
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;

//classes.
class Human {
  private name: string;
  age: number;
  sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  greet() {
    console.log("hello");
  }
}
