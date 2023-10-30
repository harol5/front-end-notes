let url =
  "https://davidici.datamark.live/?app=Bath%20Vanities&SKU=71-BP-060-M23-V23~21-S4-NE~18060-T2~29255-M23~71-PN-378-M23";

//returns char at given INDEX.
console.log(url.charAt(8));

//returns the INDEX of the given char or string.
console.log(url.indexOf("SKU"));

//same as "indexOf" but starts from the end of the string.
console.log(url.lastIndexOf("V23"));

//return de substring starting from the index given.
//(notice i used another method to get the index of the given string).
console.log(url.slice(url.indexOf("SKU")));

//return an ARRAY of substrings delimited by the given character(in this case "~").
console.log(url.split("~"));
console.log(url.slice(url.indexOf("SKU")).split("~"));

//checks if the given char or string exitreturns a BOOLEAN(case sensitive).
console.log(url.slice(url.indexOf("SKU")).includes("sku")); //returns false.
console.log(url.slice(url.indexOf("SKU")).includes("SKU")); //return true.

//adds and returns a new STRING with the given strings.
const str1 = "h";
const str2 = "a";
const str3 = "r";
const sumStr = str1.concat(str2, str3);
//or
const sumStr2 = str1 + str2 + str3; // better for performance.
console.log(sumStr);
console.log(sumStr2);

//remove white spaces at the beggining and end from the STRING.
const greeting = "   hello world from nyc    ";
console.log(greeting);
console.log(greeting.trim());

//search for the given REGEX and return its INDEX.
console.log(url.search(/m23/gi));

//sames as "search" but returns an array with more info about the result.
console.log(url.match(/m23/gi));

//search for the first instance of given string, and replace it with the second arg, or you can -
//pass a callback function.
url.replace(/=/g, "~");

const a = url.replace(/=/g, "~");
const b = a.slice(a.indexOf("SKU")).split("~");
b.shift();
console.log(b);
