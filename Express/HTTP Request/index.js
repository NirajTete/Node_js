import express from "express";
const app = express();
const port = 3000;

// GET Request 
app.get("/", (req, res)=>{
    res.send("<h1>Hi there!</h1>")
});

app.get("/code", (req, res)=>{
    res.sendStatus(200);
});

// POST Request 
app.post("/contact", (req, res)=>{
    res.send("Post request successful");
});

//PUT Request
app.post("/name", (req, res)=>{
    res.send("Put request successful");
});

//PATCH Request
app.post("/firstname", (req, res)=>{
    res.send("Patch request successful");
});

//DELETE Request
app.post("/id", (req, res)=>{
    res.send("Delete request successful");
});


app .listen(port, ()=>{
    console.log(`Server is listening on ${port}.`);
});