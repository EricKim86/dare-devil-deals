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
  mutation addOrder($experience: [ID]!) {
    addOrder(experience: $experience) {
      purchaseDate
      experiences {
        _id
        name
        description
        image
        price
        points
        activityLevel
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
    $image: String
    $location: String
    $userName: String!
    $bio: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      image: $image
      location: $location
      userName: $userName
      bio: $bio
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($experiencesId: ID!, $title: String, $description: String!) {
    addReview(experiencesId: $experiences, title: $title, description: $description) {
      experiences {
        _id
        title
        description
      }
    }
  }
`;