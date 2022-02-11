const mongoose = require('mongoose');
const crypto = require('crypto');

const googleUserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        index: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    profile: {
        type: String,
        required: true
    },
    
    salt: String,
    about: {
        type: String
    },
    role: {
        type:Number,
       
        default: 0
    },
    gtoken:{
        type: String
    },
    
    photo: {
        type: String
    },
  
}, {timestamps: true});


googleUserSchema.methods = {
    

    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random) + '';
    }
}

module.exports = mongoose.model('GoogleUser', googleUserSchema);