// basic types
let id: number = 5;
let myName: string = "harol";
let isMale: boolean = true;
let a: any = "i can be any type";

// array with only type number
let ids: number[];
ids = [1, 2, 3];

let rows: string[][];
rows = [
  ["9", "9", "10"],
  ["11", "13"],
];

// Tuple: allows only types declared inside the brackets. must be same length.
let nums: [number, string];
nums = [3, "4"];

// Multidimentional array with tuple type;
let numsArr: [number, string][];
numsArr = [
  [1, "1"],
  [2, "2"],
];

let test: { name: string; age: number; canDrink: boolean };
test = { name: "hello", age: 45, canDrink: true };

let x: { name: string; age: number }[];
x = [
  { name: "harol", age: 45 },
  { name: "pedro", age: 56 },
];

// Union: allows multiple types.s
let pid: number | string;
pid = 23;
pid = "23";

let driver:
  | { name: string; age: number }
  | { name: string; age: number; under18: boolean };

driver = { name: "pedro", age: 23 };
driver = { name: "pedro", age: 23, under18: true };

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
const newUser: User = { id: 121, name: "harol" };

type Dog = {
  name: string;
  age: number;
  owner?: User;
};
let firulais: Dog = { name: "firulais", age: 2 };
let tyson: Dog = { name: "tyson", age: 6, owner: newUser };

// creating and abstrac func.
type mathFunc2 = (a: number, b: number) => number;
const add2: mathFunc2 = (a: number, b: number): number => {
  return a + b;
};
const substract: mathFunc2 = (a: number, b: number): number => {
  return a - b;
};

//type assertion. tell compiler we want to convert variable into another type.
let cid: any = 1;
let customerId: unknown = <number>cid;
let toStringCus: string = customerId as string;
console.log(typeof toStringCus);

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

// creating and abstrac func.
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

//================================================FUNCTIONS.
//--------------arg:type,arg:type--return type
function addNum(x: number, y: number): number {
  return x + y;
}

function printCar(car: Car): void {
  console.log(car);
}

// void
function print(a: string): void {
  console.log(a);
}

// optional param
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

// rest operator
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, crr) => prev + crr);
};
