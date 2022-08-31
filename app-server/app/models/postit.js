'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostItSchema = new Schema({
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

mongoose.model('PostIt', PostItSchema);