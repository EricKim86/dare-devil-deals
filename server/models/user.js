const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  userName: {
    type: String,
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
  location: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
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
  points:
  {
    type: Number,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Orders'
    }
  ],

});

const User = mongoose.model('User', userSchema);

module.exports = User;