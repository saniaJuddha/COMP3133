const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect("mongodb+srv://admin:admin@restaurants.0fa3e.mongodb.net/Restaurants?retryWrites=true&w=majority")
const app = express();
app.use(bodyparser.json())

app.use("/restaurants", require("./routes/api"))

app.get("/", (req, res)=>{
    res.send({Project:"lab3_restaurant_database"})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);