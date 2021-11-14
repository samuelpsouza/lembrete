'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StickyNoteSchema = new Schema({
	title: {
		type: String,
		required: true
	},
    content: {
		type: String,
		max: 140,
		required: true
    }
});

mongoose.model('StickyNote', StickyNoteSchema);