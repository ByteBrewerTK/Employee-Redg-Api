const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    user : {
        type : String,
        maxLength : 30,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    title : {
        type : String,
        maxLength : 30,
        required : true
    },
    department : {
        type : String,
        maxLength : 30,
        required : true
    },
    role : {
        type : String,
        maxLength : 30
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        required : true,
        default : Date.now
    }

});

module.exports = mongoose.model('User', userSchema);