const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        min: 10,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "this email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    hobbies: {
        type: String,
        required: true,
    },
});

const user = new mongoose.model('user', userSchema);

module.exports = user;