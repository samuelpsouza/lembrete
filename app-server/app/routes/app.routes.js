const express = require("express");

const postItsRoutes = require("./postit.route");
const userRoutes = require("./user.route");
const auth = require("./auth.route");

module.exports = (app) => {
    app.use('/postits', postItsRoutes);
    app.use('/login', userRoutes)
}