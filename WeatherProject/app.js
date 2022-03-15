const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    const unit = "metric";
    const query = req.body.city;
    const appId = "62ba2d7324b4bdbcd97b5eac721f1175";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=" + unit + "&q=" + query + "&appid=" + appId;
    https.get(apiUrl, function(response){
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const weatherDegree = weatherData.main.temp;
            const weatherFeelsLike = weatherData.main.feels_like;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIconCode = weatherData.weather[0].icon;
            const weatherCity = weatherData.name;
            const imgUrl = ("http://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png");
            res.write("<h1>The weather in " + weatherCity + " is " + weatherDescription + " now.</h1>");
            res.write("<h1>Degree Celcius: " + weatherDegree + ".</h1>");
            res.write("<h1>Feels like: " + weatherFeelsLike + ".</h1>");
            res.write("<img src=" + imgUrl + " alt='weather-icon'>");
            res.send();
        })
    })
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});