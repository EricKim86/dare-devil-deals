const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema({
    experience: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true,
    },
    level: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Activity Level'
    }
]
});

const Experiences = mongoose.model('Experiences', experienceSchema);

module.exports = Experiences;