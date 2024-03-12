const body = document.querySelector("body");
const main = document.querySelector("main");
const section = document.querySelectorAll("section");
const footer = document.querySelector("footer");

const myEvent = new Event("customEvent", { bubbles: true });

document.addEventListener("customEvent", (e) => {
  console.log("custom event handler trigger");
  console.log(e);
});

body.addEventListener("click", (e) => {
  console.log("click event handler trigger");
  e.target.dispatchEvent(myEvent);
});

footer.addEventListener("click", (e) => {
  console.log("footer event handler trigger");
  console.log(e);
});

const myMap = new Map();
myMap.set({ name: "harol" }, "human");
myMap.set({ name: "lilo" }, "human");
myMap.set(78, "human");

function convertHexaToDec(hex) {
  if (typeof hex === "number") {
    const asStringHex = hex.toString();
    const asArray = asStringHex.split("");

    console.log(asStringHex);
    console.log(asArray);
  }
}

const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (res) => {
  console.log(res);
});
