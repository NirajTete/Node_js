import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));       

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
    res.send(req.body);
});

app.listen(port, (req, res)=>{
    console.log(`Server is listing to ${port}.`);
});


