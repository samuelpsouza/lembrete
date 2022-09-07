const PostIt = require('../models/postit');

exports.findAllPostIts = async (req, res, next) => {
    const data = await PostIt.find({});
    res.json(data)
};

exports.createPostIt = async (req, res, next) => {
    const data = await PostIt.create(req.body);
    res.json(data)
}

exports.updatePostIt = async (req, res, next) => {
    res.json(data);
};

exports.deletePostIt = async (req, res, next) => {
    const data = await PostIt.deleteOne(req.body);
    res.send(data);
}