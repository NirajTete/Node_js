const { log } = require("console");
const fs = require("fs");

// fs.writeFile("index.txt", "Hello form Node",  (err)=>{
// if(err) throw err;
// console.log("The file is saved!");
// });

fs.readFile("./index.txt", "utf-8", (err,  data)=>{
    if(err) throw err;
    console.log(data);
}  )