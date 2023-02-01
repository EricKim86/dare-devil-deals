const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    order: {
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
    experience: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Experiences'
    }
]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;