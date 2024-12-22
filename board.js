(function () {
  console.log("hello");
})();

let a = 89;
let b = 78;

function add(a, b) {
  return a + b;
}

console.log(add(a, b));

const sub = (a, b) => a - b;
console.log(sub(10, 5));

console.log("bug 2 fixed");

function pro(value) {
  return new Promise((resolve, reject) => {
    if (value > 50) {
      setTimeout(() => resolve("value returned"), 9000);
    } else {
      reject("work rejected");
    }
  });
}

const obj = pro(Math.round(Math.random() * 100));

obj.then((value) => console.log(value)).catch((err) => console.log(err));
