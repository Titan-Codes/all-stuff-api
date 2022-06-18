const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const { default: axios } = require("axios");

const app = express();

app.set('views', './views/');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// BASIC STUFF ABOVE

// ALL THE ROUTS BELOW

function getCat(){
    axios.get("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            const catImage = response.data[0].url
        })
}

app.get("/", (req,res) => {
    res.render("home");
});

app.route("/cats")
    .get((req,res) => {
        axios.get("https://api.thecatapi.com/v1/images/search?size=small")
            .then(response => {
                const catImage = response.data[0].url
                res.render("cats", {catImage: catImage})
            })
    })

app.get("*", (req,res) => {
    res.send("<h1 style='text-align: center;'>Looks like this page doesn't exist.</h1>");
});

app.listen(3000, () => {
    console.log("Server running.");
});