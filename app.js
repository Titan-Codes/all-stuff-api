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

// ALL THE ROUTES BELOW

app.get("/", (req,res) => {
    res.render("home");
});

// cat api
app.route("/cats")
    .get((req,res) => {
        axios.get("https://api.thecatapi.com/v1/images/search?size=small")
            .then(response => {
                const catImage = response.data[0].url
                res.send(response.data[0])
            })
    })

// dog api
app.route("/dogs")
    .get((req,res) => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                res.send(response.data)
            })
    })


// 404 page
app.get("*", (req,res) => {
    res.render("error");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running.");
});

module.exports = app;