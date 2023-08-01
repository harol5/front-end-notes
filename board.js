let obj = {
  field: 1,
  field2: 2,
  field3: 3,
  field4: 4,
};

console.log(Object.entries(obj));

for (let prop of Object.entries(obj)) {
  console.log(prop);
}
