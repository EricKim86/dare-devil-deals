const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number
    },
    activityLevel: {
        type: Number,
        required: true,
    },
});

const Experiences = mongoose.model('Experiences', experienceSchema);

module.exports = Experiences;