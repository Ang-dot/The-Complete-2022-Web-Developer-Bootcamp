const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Save all the fruits into database successfully.");
//     }
// })

// fruit.save();

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

pineapple.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// person.save();

Person.updateOne({name: "John"}, {favoriteFruit: pineapple},(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Updated the record in database successfully!");
    }
})

Person.find((err, person) => {
    if (err) {
        console.log(err);
    }
    else {
        mongoose.connection.close();
        person.forEach((sections) => {
            console.log(sections.favoriteFruit);
        })
    }
})