class Cat {
  name: string;
  age: number;
  numOfLives: number;

  constructor(name: string, age: number, numOfLives: number) {
    this.name = name;
    this.age = age;
    this.numOfLives = numOfLives;
  }
}

interface CatInterface {
  name: string;
  age: number;
  numOfLives: number;
}

const myCat: CatInterface = new Cat("milo", 2, 7);
console.log(myCat.age);
