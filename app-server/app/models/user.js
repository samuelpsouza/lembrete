'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
    },

    lastName: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },
    
    postits: [{
        type: Schema.Types.ObjectId,
        ref: 'PostIt'
    }]
});

module.exports = mongoose.model('User', UserSchema);
