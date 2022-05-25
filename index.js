console.log("Hello World");

const fs = require("fs");

fs.copyFileSync("file1.txt","file2.txt");
console.log("A new file 2 created and the text of file1 ois copied to file2.txt");
