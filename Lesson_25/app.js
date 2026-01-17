const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (req, res)=>{
    res.end("You are creating an item!!!");
});

app.get("/", (req, res)=>{
    res.render("reja");
});


module.exports = app;