import { gql } from '@apollo/client';

export const QUERY_EXPERIENCES = gql`
  query getExperiences($experiences: ID) {
    experiences(experiences: $experiences) {
      _id
      name
      description
      image
      price
      points
      activityLevel
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($experiences: [ID]!) {
    checkout(experiences: $experiences) {
      session
    }
  }
`;

export const QUERY_ALL_EXPERIENCES = gql`
  {
    experiences {
      _id
      name
      description
      image
      price
      points
      quantity
      activityLevel
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
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
  }
`;
