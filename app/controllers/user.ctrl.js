const User = require('../models/user');

exports.createUser = async (req, res, next) => {
    const data = await User.create(req.body);
    res.json({"message": "user created successfully."})
}
