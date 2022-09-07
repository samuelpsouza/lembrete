const User = require("../models/user");

exports.listAllUsers = (req, res, next) => {
    User.find().then((result) => {
        res.json(result);
    });
};

exports.registerUser = (req, res, next) => {
    new User(req.body)
        .save()
        .then(user => res.json(`User ${user.id} created successfully`));
};
