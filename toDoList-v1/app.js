const express = require("express");
const bodyParser = require("body-parser");

const app = express();


let taskList = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    let date = today.toLocaleDateString("en-US", options);
    res.render("list", {date: date, taskList: taskList});
})

app.post("/", (req, res) => {
    let newTask = req.body.newTask;
    taskList.push(newTask);
    res.redirect("/");
})

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, () => {
    console.log("The server is running on port 3000");
})