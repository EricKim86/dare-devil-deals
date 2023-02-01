const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    experiences: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Experiences'
        }
    ],
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;