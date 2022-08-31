const User = require("../models/user");

exports.registerUser = (req, res, next) => {
    const data = User.create(req.bool);
    res.json(data);
}

exports.findAllUsers = (req, res, next) => {
    res.json({})
};