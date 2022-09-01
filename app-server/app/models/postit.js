'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostItSchema = new Schema({
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

module.exports = mongoose.model('PostIt', PostItSchema);