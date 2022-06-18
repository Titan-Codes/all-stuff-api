const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set('views', './views/');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// BASIC STUFF ABOVE

// ALL THE ROUTS BELOW

app.get("/", (req,res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server running.");
});