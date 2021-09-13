const express = require("express");

const reminderRoutes = require("./reminder.route");
const userRoutes = require("./user.route");

module.exports = (app) => {
    app.use('/reminders', reminderRoutes);
}