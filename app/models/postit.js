'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostitSchema = new Schema({
	title: {
		type: String,
		required: true
	},
    text: {
		type: String,
		max: 140,
		required: true
    }
});

mongoose.model('Postit', PostitSchema);