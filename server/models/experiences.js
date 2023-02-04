const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    originalprice: {
        type: Number
    },
    price: {
        type: Number
    },
    percentage: {
        type: Number
    },
    points: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    activityLevel: {
        type: Number,
        required: true
    },
    reviews: [
        {
            title: {
              type: String,
              minlength: 1,
              maxlength: 100,
            },
            description: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
              },
            createdAt: {
              type: Date,
              default: Date.now,
              get: (timestamp) => dateFormat(timestamp),
            },
          },
    ]
});

const Experiences = mongoose.model('Experiences', experienceSchema);

module.exports = Experiences;