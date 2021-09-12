const express = require("express");

const reminderRoutes = require("./reminder");

module.exports = (app) => {
    app.use('/reminders', reminderRoutes);
}