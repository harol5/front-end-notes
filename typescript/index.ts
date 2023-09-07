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

// Objects
type User = {
  id: number;
  name: string;
};
const newUser: User = {
  id: 121,
  name: "harol",
};
