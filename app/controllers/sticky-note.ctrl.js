const StickyNote = require('../models/sticky-note');

exports.findAllStickyNotes = async (req, res, next) => {
    const data = await StickyNote.find({});
    res.json(data)
};

exports.createStickyNote = async (req, res, next) => {
    const data = await StickyNote.create(req.body);
    res.json(data)
}

exports.deleteStickyNote = async (req, res, next) => {
    const data = await StickyNote.deleteOne(req.body);
    res.send(data);
}