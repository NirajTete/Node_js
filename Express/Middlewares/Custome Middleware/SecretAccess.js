import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath} from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var pass = "";

app.use(bodyParser.urlencoded({extended:true}));

function passcheck(req, res, next){
    // console.log(req.body["pass"]);
    pass = req.body["pass"];
    // console.log(pass);
    next();
}

app.use(passcheck);

app.get("/", (req, res)=>{
    res.sendFile(_dirname + "/public/login.html");
});

app.post("/check", (req, res)=>{
   if(pass === "pass@123")
    res.sendFile(_dirname + "/public/secrect.html");

    else
    res.sendFile(_dirname + "/public/login.html");
});

app.listen(port, (req, res)=>{ 
    console.log(`Server is listing to ${port}`);
});
