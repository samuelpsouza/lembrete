const User = require("../models/user");

exports.registerUser = (req, res, next) => {
    new User(req.body)
        .save()
        .then(user => res.json(`User ${user.id} created successfully`));
}
