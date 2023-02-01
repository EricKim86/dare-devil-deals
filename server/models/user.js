const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
      name: {
        type: String,
        required: true,
        trim: true
      },
      id: {
        type: Number,
        required: true
      },
      description: {
        type: String
      },
      image: {
        type: String
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
      userlevel: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User Level'
      }
    ],

});

const User = mongoose.model('User', userSchema);

module.exports = User;