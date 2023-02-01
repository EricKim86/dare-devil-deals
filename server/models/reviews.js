const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    experience: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Experiences'
    }
],
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;