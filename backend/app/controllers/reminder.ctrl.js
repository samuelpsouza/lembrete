const Postit = require('../models/postit')

exports.findAllReminders = (req, res, next) => {
    const data = Postit.find({});
    res.json(data)
};

exports.createReminder = (req, res, next) => {
    const data = Postit.create(req.body);
    res.json(data)
}

exports.deteleReminder = (req, res, next) => {
    console.log("Deleting")
}