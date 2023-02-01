const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reviews'
    }
  ],
  experiences: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Experiences'
    }
  ],
  points: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Points'
    }
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Orders'
    }
  ],

});

const User = mongoose.model('User', userSchema);

module.exports = User;