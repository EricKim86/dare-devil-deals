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
    Bio: String
    orders: [Order]
    likedExperiences: [Experiences]
    dislikedExperiences: [Experiences]
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Experiences]
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category

}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;