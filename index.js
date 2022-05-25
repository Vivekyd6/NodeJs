// console.log("Hello World");

// const fs = require("fs");

// fs.copyFileSync("file1.txt","file2.txt");
// console.log("A new file 2 created and the text of file1 ois copied to file2.txt");


var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroes = superheroes.random();
var mySupervillains = supervillains.random();


console.log(mySuperheroes);
console.log(mySupervillains);