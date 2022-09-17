const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("Server is working.");
})

app.listen(3000, () => {
    console.log("Server is running at port 3000.");
})