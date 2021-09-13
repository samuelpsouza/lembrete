const Postit = require('../models/postit');

exports.findAllReminders = async (req, res, next) => {
    const data = await Postit.find({});
    res.json(data)
};

exports.createReminder = async (req, res, next) => {
    const data = await Postit.create(req.body);
    res.json(data)
}

exports.deteleReminder = async (req, res, next) => {
    const data = await Postit.deleteOne(req.body);
    res.send(data);
}