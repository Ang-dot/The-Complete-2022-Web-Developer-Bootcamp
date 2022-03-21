const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", (err) => {
    
if(!err) {

        console.log("Connected to mongoDB database.");

    } else {

        console.log(err);
    }
})

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", (req, res) => {

    Article.find((err, articles) => {

        if(!err) {

            res.send(articles);

        }   else {

            res.send(err);

        }

    })


})

app.post("/articles", (req, res) => {

    const article = new Article({
        title: req.body.title,
        content: req.body.content
    })
    
    article.save((err) => {

        if(!err) {

            res.send("New article has been saved successfully.");

        }
        else {

            res.send(err);
            
        }
    });

})

app.listen(process.env.PORT || 3000, () => {

    console.log("Server started online.")

})