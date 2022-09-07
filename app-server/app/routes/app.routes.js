const express = require("express");

const postItsRoutes = require("./postit.route");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");

module.exports = (app) => {
    app.use('/postits', postItsRoutes);
    app.use("/users", userRoutes);
    app.use('/login', authRoutes)
}