const mongoose = require('mongoose');

const { Schema } = mongoose;

const userlevelSchema = new Schema ({
    userlevel: {
        type: Number,
        required: true
    },
    exp: {
        type: Number,
        required: true
    }
})

const UserLevel = mongoose.model('userLevel', userlevelSchema);

module.exports = UserLevel;