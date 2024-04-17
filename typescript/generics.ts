type ArrayWithNumber = Array<number>;
const ages: ArrayWithNumber = [4, 3, 4, 5];

//----------------------------------------------------

type ArrayWithUsers = Array<User>;
const users: ArrayWithUsers = [
  { id: 1, name: "harol" },
  { id: 2, name: "lilo" },
];

//----------------------------------------------------

type ArrayWithDogs = Array<Dog>;
const dogs: ArrayWithDogs = [
  { name: "firulais", age: 3, owner: users[0] },
  { name: "plumas", age: 1, owner: users[1] },
];

//----------------------------------------------------

const echo = <T>(args: T): T => args;
console.log(echo<string>("hello world"));

//----------------------------------------------------

const printArray = <T>(arr: T[]): void => {
  for (const e of arr) {
    console.log(e);
  }
};
printArray<User>(users);
printArray<Dog>(dogs);

//----------------------------------------------------

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

//---------------------Interface-------------------------------

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: GenericIdentityFn = identity;
