const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.ctrl');
const userRoot = '/';

router.get(userRoot, UserController.findAllUsers);

module.exports = router;