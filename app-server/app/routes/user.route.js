const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.ctrl');
const userRoot = '/';

router.post(userRoot, UserController.registerUser)

module.exports = router;