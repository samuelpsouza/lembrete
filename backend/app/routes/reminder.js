const express = require('express');
const router = express.Router();

const ReminderController = require('../controllers/reminder.ctrl');

router.get('/', ReminderController.findAllReminders);

module.exports = router;