const div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "white";
console.log(div);

const div2 = document.createElement("div");
div2.style.width = "100px";
div2.style.height = "100px";
div2.style.backgroundColor = "red";

const h1 = document.createElement("h1");
h1.innerHTML = "loook";

const p = document.createElement("p");
p.innerHTML = "im manipulating the dommm";

document.body.appendChild(div);
div.appendChild(div2);
div2.appendChild(h1);
div2.appendChild(p);

//bubbleling by default.
div.addEventListener("click", (e) => {
  console.log("div");
});
//To capture pass "true" as 3rd argument.
div.addEventListener(
  "click",
  (e) => {
    console.log("div");
  },
  true
);

div2.addEventListener("click", (e) => {
  console.log("div2");
});
div2.addEventListener(
  "click",
  (e) => {
    console.log("div2");
  },
  true
);

p.addEventListener("click", (e) => {
  console.log("p");
});
p.addEventListener(
  "click",
  (e) => {
    console.log("p");
    // e.stopPropagation();
  },
  true
);
