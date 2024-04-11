const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'Enter your full name'
    },
    email: {
        type: String,
        required: 'Enter your email',
        unique: true
    },
    password: {
        type: String,
        required: 'Enter your password'
    },
    type: {
        type: String,
        required: 'Enter user type'
    }
});