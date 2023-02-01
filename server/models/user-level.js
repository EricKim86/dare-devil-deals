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

const Userlevel = mongoose.model('User Level', userlevelSchema);

module.exports = Userlevel;