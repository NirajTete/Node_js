import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        second: new Date().getSeconds(),
        items: ["apple", "banana", "kiwi", "gwava"],
        htmlContent: "<em>This is some em text.</em>",
    };

    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server is listing on ${port}.`);
});
