const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
module.exports = { typeDefs, resolvers };

const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
    token: ID!
    user: User
}

type User {
 _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
    image: String
    bio: String 
    orders: [Orders]
    experiences: [Experiences]
    reviews: [Reviews]
    userLevel: [userLevel]
}

type Order {
  _id: ID
  purchaseDate: String
  experiences: [Experiences]
}

type Experiences {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    points: Points
    activityLevel: activityLevel
}

type Review {
  _id: ID
  description: String
  rating: String
  experiences: [Experiences]
}


type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Query {
    Experiences: [Experiences]
    Experiences(_id: ID!): Experiences
    user: User
    user(_id: ID!): User
    order(_id: ID!): Order
    checkout(experiences: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, image: String!, bio: String!): Auth
    addOrder(experiences: [ID]!): Order
    updateUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, image: String!, bio: String!): User
    addReview(experiences: [ID]! description: String!, rating: String!)
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

