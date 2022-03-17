const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


const generalTaskList = ["Buy Food", "Cook Food", "Eat Food"];
const workTaskList = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const today = date.getDate();
    res.render("list", {listTitle: today, taskList: generalTaskList});
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", taskList: workTaskList});
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.post("/", (req, res) => {
    const newTask = req.body.newTask;
    let destination = "";
    if (req.body.list === "Work") {
        workTaskList.push(newTask);
        destination = "work";
    } 
    else {
        generalTaskList.push(newTask);
    }
    res.redirect("/" + destination);
})

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, () => {
    console.log("The server is running on port 3000");
})