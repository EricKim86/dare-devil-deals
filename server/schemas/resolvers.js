const { AuthenticationError } = require('apollo-server-express');
const { User, Experiences, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51MXvksHlEIi5d2ZgjcYBAv2OY2zCniO3CH3QG1OljCtZDJaKE5C1NUJXyrSczQSpneb4B6gW7sSsNkaN2h6cknSH007A81jaH6');

const resolvers = {
  Query: {
    experiences: async (parent, { activityLevel }) => {
      const params = {};

      if (activityLevel) {
        params.activityLevel = activityLevel;
      }

      return await Experiences.find(params).populate('activityLevel');
    },
    experience: async (parent, { _id }) => {
      return await Experiences.findById(_id)
    },
    users: async () => {
      return await User.find();
    },
    userFeed: async (parent, { _id }) => {
      return await User.findById(_id);
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('orders').populate({
          path: 'orders',
          populate: 'experience'
        });

        console.log(user.orders);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.experiences',
          populate: 'activityLevel'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ experience: args.experiences });
      const line_items = [];

      const { experience } = await order.populate('experience');

      for (let i = 0; i < experience.length; i++) {
        const product = await stripe.products.create({
          name: experience[i].name,
          description: experience[i].description,
          images: [`${url}/images/${experience[i].image}`]
        });



        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: experience[i].price * 100,
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
        success_url: `${url}/`,
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
    addReview: async (parent, { experienceId, title, description }) => {
      return Experiences.findOneAndUpdate(
        { _id: experienceId },
        {
          $addToSet: { reviews: { title, description } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addOrder: async (parent, { experience }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ experience });

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

