const body = document.querySelector("body");
const main = document.querySelector("main");
const section = document.querySelectorAll("section");

const myEvent = new Event("customEvent", { bubbles: true });

body.addEventListener("click", (e) => {
  console.log(e);
  e.target.dispatchEvent(myEvent);
});

main.addEventListener("customEvent", (e) => console.log(e));
