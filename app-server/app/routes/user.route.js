const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.ctrl');
const userRoot = '/';

router.get(userRoot, UserController.findAllUsers);
router.post(userRoot, UserController.registerUser)

module.exports = router;