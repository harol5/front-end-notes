const os = require("os"); //operating system module.
const path = require("path"); //path module.
const { mathModule } = require("./math"); // custom module => returns an object (use object destruture);
const fs = require("fs");

mathModule();
console.log(__dirname);
console.log(__filename);
