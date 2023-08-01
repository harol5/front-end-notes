//////////////////////////////////////////////////////////////
let arr = [];
let obj = {};
let num = 1;
let str = "string";
let bln = false;

function fun(num, ...arg) {
  num = num + 1;
  console.log(num);
  console.log(arg);
  console.log(fun.arguments);
}
fun(num, 2, 3, "four");
console.log(num);

obj.name = "harol";
obj.lastName = "rojas";
obj.age = 28;
obj.isFemale = false;

// refObj will have the refernece to the same object the obj variable is pointing.
let refObj = obj;
refObj.name = "name changed from a differenc variable";
console.log(refObj);
console.log(obj);
// to copy an object and modify it without changing the original object, use the following code.
let copyOfObj = { ...obj };
copyOfObj.name = "copy of obejct using spread operator";
console.log(copyOfObj);
console.log(obj);

let obj2 = {
  name: "obj2",
  fun: function () {
    console.log(this);
  },
};

//----------------------------------------Objects----------------------------------------//

function Person(name, lastName, age, sex) {
  //this is a constructor function, it is used to create object, the "this" -
  //will point at the empty objet that the "new" keyword will create.
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.sex = sex;
}
Person.prototype.getFullName = function () {
  //when using a function as a constructor, the function will have an object -
  //called "prototype", you will use this object to set up the prototype.
  return this.name + " " + this.lastName;
};

///creating an instance of the Person constructor.
let juan = new Person("juan", "rojas", 46, "male");
console.log(juan);
console.log(obj);

//the Object.create() constructor is use to create new objects, it takes an object as -
//as an argument which will be use as the prototype of the object.
let juanSon = Object.create(juan);
juanSon.sonNum = 1;
juanSon.name = "harol";
juanSon.lastName = "rojas";
juanSon.age = 28;
juanSon.sex = "male";
console.log(juanSon);

for (let prop in juanSon) {
  if (juanSon.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
console.log(Object.getOwnPropertyNames(juanSon));

//---------------------------------Classes----------------------------------//
//classes are just another way to create objects.
//under the hood, they are just functions.

class Human {
  //this is how you declare instance fields.
  name;
  age;
  sex;
  //the constructor function is use to initiate field;
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  //methods created inside the body of the class will be part of the Human.prototype -
  //of the object created.
  greet() {
    console.log("hello");
  }
}

//to increase the prototype chain, use the "extends" keyword, "Latino" class will inherete -
//all the fields and methods from the "Human" class.
class Latino extends Human {
  country;

  //the static keyword make this field part of the class. it wont be copy to instances -
  //created using this class.
  static lan = "spanish";

  //if you explicitly declare the constructor function, you have to call "super()"
  //in order to use the field from the class you extended
  constructor(name, age, sex, country, ssn) {
    super(name, age, sex);
    this.country = country;
    this.#ssn = ssn;
  }
  greet() {
    console.log("hola, me llamo " + this.name);
  }

  //the "#"" makes a field "private", you wont be able to modify -
  //a private field unless you declare getters and setters
  #ssn;

  get getSSN() {
    return this.#ssn;
  }

  set setSSN(newSSN) {
    this.#ssn = newSSN;
  }
}

const user = new Latino("harol", 28, "male", "colombia", 12345);
console.log(user.getSSN);
user.setSSN = 99999;
console.log(user.getSSN);
user.greet();

//--------------------------Bind, Call and Apply-------------------------//
//these three methods are availible inside the object function -
//(remenber function are objects in JS) and they are use to indicate the -
//value of "this".

function greetUser(time) {
  this.greet();
  return `Good ${time} ${this.name}, you are a ${this.sex} and you are ${this.age}`;
}

//call() takes an object as its first argument. "this" will point to that object
//then you can pass the arguments of the function.
console.log(greetUser.call(user, "Morning"));

//apply() works like call(), the only difference is how we pass arguments ([arg1,arg2...]).
console.log(greetUser.apply(user, ["Afternoon"]));

//bind() will create a copy of the function.
const greetUserEvening = greetUser.bind(user);
console.log(greetUserEvening("Evening"));
