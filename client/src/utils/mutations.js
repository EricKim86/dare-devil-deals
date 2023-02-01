import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($activities: [ID]!) {
    addOrder(activities: $activities) {
      purchaseDate
      activities {
        _id
        name
        description
        price
        quantity
        XP
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $location: String!
    $username: String!
    $bio: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      location: $location
      username: $username
      bio: $bio
    ) {
      token
      user {
        _id
      }
    }
  }
`;