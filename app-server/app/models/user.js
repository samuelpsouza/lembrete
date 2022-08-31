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
    
    reminders: [{
        type: Schema.Types.ObjectId,
        ref: 'PostIt'
    }]
});

const validateLocalStrategyProperty = function (property) {
    return ((this.provider !== 'local' && !this.updated) || property.length);
};

mongoose.model('User', UserSchema);