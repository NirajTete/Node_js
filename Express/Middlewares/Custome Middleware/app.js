import express from "express";
const app = express();
const port = 3000;

var arr = [];
// var a = app.use(logger);
// console.log(a);

app.get("/",logger, (req, res)=>{
    res.send("Hi There!");
});

app.post("/about",logger, (req, res)=>{
    res.send("<h1>About !</h1>");
    // console.log(arr);
})

app.get("/done",logger, (req, res)=>{
    res.send("<h1>Grate!</h1>");
    console.log(arr);
})



app.listen(port, ()=>{
    console.log(`Server is listing to ${port}.`);
});

function logger(req, res, next){
    console.log(req.url);
    arr.push(req.method)
    next();
}