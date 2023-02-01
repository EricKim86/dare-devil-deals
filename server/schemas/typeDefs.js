const { User, Order, Experiences, Points, Reviews, UserLevel } = require('../models');
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
