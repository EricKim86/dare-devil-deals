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

// user: async (parent, args, context) => {
//    if (context.User) {
//      return Profile.findOne({ _id: context.User._id });
//    }
//    throw new AuthenticationError("You need to be logged in!");
//  },
// },

user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({
        path: 'orders.experiences',
        populate: 'experiences'
      });

      user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

      return user;
    }

  throw new AuthenticationError('Not logged in');
},


order: async (parent, { _id }, context) => {
  if (context.user) {
    const user = await User.findById(context.user._id).populate({
      path: 'orders.experiences',
      populate: 'experiences'
    });

    return user.orders.id(_id);
  }

  throw new AuthenticationError('Not logged in');
},

checkout: async (parent, args, context) => {
    const url = new URL(context.headers.referer).origin;
    const order = new Order({ experiences: args.experiences });
    const line_items = [];

    const { experiences } = await order.populate('experiences');

    for (let i = 0; i < experiences.length; i++) {
      const experiences = await stripe.experiences.create({
        name: experiences[i].name,
        description: experiences[i].description,
        images: [`${url}/images/${experiences[i].image}`]
      });

      const price = await stripe.prices.create({
        experiences: experiences.id,
        unit_amount: experiences[i].price * 100,
        currency: 'usd',
      });

      line_items.push({
        price: price.id,
        quantity: 1
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/`
    });

    return { session: session.id };
  }
},
Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { experiences }, context) => {
        console.log(context);
        if (context.user) {
          const order = new Order({ experiences });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
  
          return order;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateExperiences: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;
  
        return await Experiences.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
  };
  
  module.exports = resolvers;
  

