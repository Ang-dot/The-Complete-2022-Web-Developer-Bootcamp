const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("<p>Contact me at weoyyang00@gmail.com.</p>")
})

app.get("/about", function(req, res) {
    res.send("<p>This is my first ever server! It is built with Express on NPM.</p>")
})

app.get("/hobbies", function(req, res) {
    res.send("<p>My favorite sport is always ball games!</p>")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});