const express = require('express');
const router = express.Router();

const ReminderController = require('../controllers/sticky-note.ctrl');
const reminderRoot = '/';

router.get(reminderRoot, ReminderController.findAllStickyNotes);
router.post(reminderRoot, ReminderController.createStickyNote);
router.delete(reminderRoot, ReminderController.deleteStickyNote);

module.exports = router;