const Schema = require('mongoose').Schema

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    }
},
    {
        timestamps: true
    });