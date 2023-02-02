const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
      purchaseDate: {
        type: String,
    },
    experience: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Experiences'
    }
]
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;