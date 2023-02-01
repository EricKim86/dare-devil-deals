const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
    level: {
        type: Number,
        required: true
    },
});

const Level = mongoose.model('Activity Level', activitySchema);

module.exports = Level;