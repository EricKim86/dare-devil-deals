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
    location: String
    points: Int
    orders: [Order]
    experiences: [Experiences]
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
    originalprice: Float
    price: Float
    percentage: Int
    points: Int
    quantity: Int
    activityLevel: Int
    reviewTitle: String
    reviewDesc: String
    reviewUser: String
    reviewTime: String
    reviews: [Reviews]
}

type Reviews {
  _id: ID
  title: String
  description: String
  createdAt: String
}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Query {
    experiences(activityLevel: Int): [Experiences]
    experience(_id: ID!): Experiences
    users: [User]
    userFeed(_id: ID!): User
    user: User
    order(_id: ID!): Order
    checkout(experiences: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, image: String, bio: String! location: String): Auth
    addOrder(experience: [ID]!): Order
    updateUser(firstName: String, lastName: String, userName: String, email: String, location: String, password: String, image: String, bio: String): User
    addReview(experienceId: ID!, title: String, description: String!): Experiences
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;