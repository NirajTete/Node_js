import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
    
});

app.post("/submit", (req, res)=>{
    var task = req.body["newtask"] ;
    console.log(task);
})


app.listen(port, ()=>{
    console.log(`Server is listing to ${port}.`);
})