const express = require('express');
const app = express();
const port = 8000;

const mongoose = require("mongoose");

setTimeout(function () {
    mongoose.connect("mongodb://localhost:27017/postits");
}, 6000);

// app.use(express.json);
// app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hello World");
});

const UserController = require("./controllers/user.ctrl");

app.post("/users", (req, res, next) => {
    UserController.registerUser(req, res, next);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});