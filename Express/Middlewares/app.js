import  express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));
// a = a.mountpath;

console.log(a.mountpath);


app.get("/" , (req, res)=>{
    res.send("Hello!");
});


app.listen(port, () =>{
    console.log(`Server is listening to ${port}.`);
});