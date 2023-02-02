const { User, Order, Experiences, Points, Reviews } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
        //Find Many
    Experiences: async () => {
      return await Experiences.find();
    },

    
    //Find One
Experiences: async (parent, { experiencesId }) => {
  return Experiences.findOne({ _id: experiencesId });
},

//Reviews query-Find by Experiences 

Reviews: async  (parent, { experiences, name, id }) => {
  const params = {};

  if (experiences) {
    params.experiences = experiences;
  }

  if (name) {
    params.name = {
      $regex: name,
    };
  }

  if (id) {
    params.id = {
      $regex: id,
    };
  }

  return Reviews.find(params).populate("experiences");
},

//Find one point query
point: async (parent, { pointId }) => {
  return Points.findOne({ _id: pointId });
},


// Retrieve data for logged-in user 

user: async (parent, args, context) => {
   if (context.User) {
     return Profile.findOne({ _id: context.User._id });
   }
   throw new AuthenticationError("You need to be logged in!");
 },
},

// user: async (parent, args, context) => {
//     if (context.user) {
//       const user = await User.findById(context.user._id).populate({
//         path: 'orders.experiences',
//         populate: 'experiences'
//       });

//       user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

//       return user;
//     },
// },

