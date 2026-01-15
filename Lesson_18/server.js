const express = require("express");
const app = express();
const http = require("http");

// 1 entry codes
// for requests coming from browsers public folder is open. so it can see public folder
app.use(express.static("public"));
// parses objects into json form
app.use(express.json())
// turns html form data into json form
app.use(express.urlencoded({extended: true}))
// 2 Sessions

// 3 view codes
// custimizing settings
app.set("views", "views");
app.set("view engine", "ejs");

// 4 router codes
app.get("/hello", (req, res)=>{
    // shows an output when the router is called in the browser
    res.end("Hello World!!!");
})
app.get("/gift", (req, res)=>{
    // shows an output when the router is called in the browser
    res.end("Gifts!!!");
})


// creating server using http core module package
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}`);

})