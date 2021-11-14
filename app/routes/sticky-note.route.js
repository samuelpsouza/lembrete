const express = require('express');
const router = express.Router();

const ReminderController = require('../controllers/sticky-note.ctrl');
const reminderRoot = '/';

router.get(reminderRoot, ReminderController.findAllReminders);
router.post(reminderRoot, ReminderController.createReminder);
router.delete(reminderRoot, ReminderController.deteleReminder);

module.exports = router;