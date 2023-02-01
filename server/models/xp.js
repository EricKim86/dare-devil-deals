const mongoose = require('mongoose');

const { Schema } = mongoose;

const pointsSchema = new Schema({
    points: {
        type: Number,
        required: true,
        min: 0
    },
});

const Points = mongoose.model('Xp', pointsSchema);

module.exports = Points;