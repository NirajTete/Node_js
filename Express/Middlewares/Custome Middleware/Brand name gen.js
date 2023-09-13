import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath} from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express(); 
const port =3000;
var brandName ="";

app.use(bodyParser.urlencoded({extended:true}));

function brandNamGen(req, res, next){
    console.log(req.body);
    brandName = req.body["Email"] + req.body["Password"];
    next();
    
}

app.use(brandNamGen);

app.get("/", (req, res)=>{
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
    res.send(`<h1>Brand Name: </h1><h2>${brandName}✌️.</h2>`); 
});

app.listen(port, (req, res)=>{
    console.log(`Server is listening to ${port}.`);
});