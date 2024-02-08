function newUser(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    greet() {
      console.log("What up" + " " + firstName + " " + lastName);
    },
  };
}

function Newhouse(area, color, numberOfBedrooms) {
  this.area = area;
  this.color = color;
  this.numberOfBedrooms = numberOfBedrooms;
  this.turnOnLights = function () {
    console.log("lights are on");
  };
}

class Newcar {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    let started = this.start();
    Object.defineProperty(this, "started", {
      get: () => {
        return started;
      },
    });
  }

  start() {
    //console.log(this.make + ' ' + this.model + ' ' +'is on!');
    return this.make + " " + this.model + " is ready to go!!";
  }
}

const juan = newUser("Juan", "Rojas", 45);
const laura = newUser("Laura", "Pulido", 24);

const apt1 = new Newhouse(900, "grey", 5);
const apt2 = new Newhouse(700, "white", 3);

const bmwM4 = new Newcar("BMW", "M4", 2022, "black");
const bentleyS = new Newcar("Bentley", "Bentayga S", 2022, "black");
const ferrariCalifornia = new Newcar("Ferrari", "California", 2014, "red");

/*
setTimeout(() => {
     console.log('wait 10sec');
}, 10000);

setTimeout(() => {
     console.log('wait 5 sec');
}, 5000);
*/

x = 35;

if (x >= 21) {
  for (let i = 0; i < 9; i++) {
    console.log("Vamos pa las putas");
    console.log(i);
  }
} else {
  console.log("Despeguelaaa!!!!");
}

juan.greet();
laura.greet();
console.log(bmwM4.start());

let cars = [(sports = [bentleyS, ferrariCalifornia, bmwM4])];

//this is a callback

function what(otherFn) {
  console.log("uno....");
  otherFn();
}

what(() => console.log("dos..."));

what(() => console.log("tres..."));

//Promises

const stock = {
  fruits: ["strawberry", "grapes", "banana", "apples"],
  liquid: ["water", "milk", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const isShopOpen = true;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stock.fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => {
      console.log("production has started");
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log("the fruit was chopped");
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(
        `${stock.liquid[0]}, ${stock.liquid[1]} and ${stock.liquid[2]} were mixed`
      );
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`ice cream was served on a ${stock.holder[0]}`);
    });
  })

  .catch(() => {
    console.log("customer left");
  })

  .finally(() => {
    console.log("day is over, shop is closed");
  });

// // Callback hell.

// const order = (fruit, callProduction) => {
//   console.log("order taken...");

//   setTimeout(() => {
//     console.log(`${stock.fruits[fruit]} was selected`);
//     callProduction();
//   }, 3000);
// };

// const production = () => {
//   console.log("production started");

//   setTimeout(() => {
//     console.log(`fruit was chopped`);
//     setTimeout(() => {
//       console.log(`${stock.liquid[0]} and ${stock.liquid[1]} mixed`);
//     }, 2000);
//   }, 3000);
// };

// order(2, production);

//immediately invoked function expression
const outerFunc = (function () {
  return "hola";
})();
console.log(outerFunc);

var blabla = "gato";

(function () {
  name = "perro";
  console.log(this.blabla);
})();

//arguments property
const pirobo = {
  name: "customer name",
  callName: function (name, ...others) {
    name = name || "ponga el hp nombre";
    console.log("hello " + name);
    console.log(arguments);
  },
};

pirobo.callName("perro", "puto", 78);

///////////////////////////////// Differents between __proto__ and prototype ////////////////////////////////////

let cocainePlanet = {
  name: "cocaine planet",
  galaxy: "pablito Galaxy",
};
console.log(cocainePlanet);

function NewPlanet(name, galaxy) {
  this.name = name;
  this.nameGalaxy = galaxy;
}
NewPlanet.prototype.greeting = function () {
  return "greetings from " + this.name + " located at " + this.nameGalaxy;
};

const weedPlanet = new NewPlanet("weed planet", "420 Galaxy");
console.log(weedPlanet);

////////////////////////////////// Array practice /////////////////////////////////

let arrayExample = [1, 2, 3];

////////////////////// adding ////////////

//end of an Array.
arrayExample.push(["uno", "dos", "tres"], { name: "harol", lastName: "rojas" });
console.log("added elements using push: ", arrayExample);

//Beginning of an Array.
arrayExample.unshift(true, false);
console.log("added elements using unshift: ", arrayExample);

//any position of an Array.
arrayExample.splice(5, 0, ["one", "two", "three"]);
console.log(
  "added element before the 5th element of the previous array: ",
  arrayExample
);

////////////////////// removing ////////////////////////

//end of an Array.
console.log(arrayExample.pop());

//beginning of an Array.
console.log(arrayExample.shift());

//empty array
//arrayExample.length = 0; or arrayExample.splice(0, arrayExample.length);

///////////////////// finding (primitive) ///////////

//returns index of the given element.
console.log(arrayExample.indexOf(3)); //use lastIndexOf() to get the index of a given elemt that repeats in the array.

//return true if the element exist in the array.
console.log(arrayExample.includes(true));

///////////////////// finding (reference) ////////////

//this method returns the element that contains the given criteria, in this case 'rojas'.
const findLastName = arrayExample.find(
  (element) => element.lastName === "rojas"
);
console.log(findLastName);

//this one is similar but returns the index.
const findIndexOfLastName = arrayExample.findIndex(
  (element) => element.lastName === "rojas"
);
console.log(findIndexOfLastName);

///////////////////// Iterating an Array //////////////

arrayExample.forEach((element) => console.log("hey!"));

//////////////////// joining an array //////////////////

let joined = ["hi", "sexy"];
console.log(joined);
console.log(joined.join("-"));

/////////////////// sorting an array with objects//////

let first = [
  { id: 1, name: "weed", isLegal: true },
  { id: 2, name: "Coke", isLegal: false },
  { id: 3, name: "shrooms", isLegal: true },
];

first.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(first);

const legalDrugs = first
  .filter((item) => item.isLegal === true)
  .map((item) => [item]);
console.log(legalDrugs);

//-------------stopwatch----------------

function Stopwatch() {
  let startTime,
    endTIme,
    running,
    duration = 0;
  this.start = function () {
    if (running) throw new Error("stopwatch already started");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("stopwatch not started");
    running = false;
    endTIme = new Date();
    const seconds = (endTIme.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTIme = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: () => duration,
  });
}

// import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

// const scrollTimeLinetracker = new ScrollTimeline({
//   source: document.scrollingElement,
//   orientation: "block",
//   scrollOffsets: [
//     CSS.px(about.offsetTop + about.offsetHeight - window.innerHeight - 400),
//     CSS.px(about.offsetTop - 400),
//   ],
//   //   scrollOffsets: [
//   //     { target: about, edge: "end", threshold: "0" },
//   //     { target: about, edge: "start", threshold: "0" },
//   //   ],
// });

// about.animate(
//   {
//     transform: ["scale(0.3)", "scale(1)"],
//     opacity: ["0", "1"],
//   },
//   {
//     duration: 1,
//     easing: "linear",
//     timeline: scrollTimeLinetracker,
//   }
// );

// console.log(about.offsetTop);
// console.log(about.offsetHeight);
// console.log(window.innerHeight);
