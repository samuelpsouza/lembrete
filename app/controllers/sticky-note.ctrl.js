const StickyNote = require('../models/sticky-note');

exports.findAllReminders = async (req, res, next) => {
    const data = await StickyNote.find({});
    res.json(data)
};

exports.createReminder = async (req, res, next) => {
    const data = await StickyNote.create(req.body);
    res.json(data)
}

exports.deteleReminder = async (req, res, next) => {
    const data = await StickyNote.deleteOne(req.body);
    res.send(data);
}