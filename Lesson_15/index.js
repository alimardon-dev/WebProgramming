// Module package core
// setInterval(() => {
//     console.log("Hello world!");
// }, 1000);

const fs = require('fs');

const data = fs.readFileSync("./input.txt", "utf8");
console.log(data); 

console.log("*********************");

fs.writeFileSync("./input.txt", "this is a new text");
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);