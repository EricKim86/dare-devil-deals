import { gql } from '@apollo/client';

export const QUERY_EXPERIENCES = gql`
  query getExperiences($activityLevel: Int) {
    experiences(activityLevel: $activityLevel) {
      _id
      name
      description
      image
      price
      points
      originalprice
      percentage
      activityLevel
    }
  }
`;

export const QUERY_EXPERIENCE = gql`
  query getExperience($_id: ID!) {
    experience(_id: $_id) {
      _id
      name
      description
      image
      price
      points
      originalprice
      percentage
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
      originalprice
      percentage
      quantity
      activityLevel
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    users {
      firstName
      lastName
      location
      userName
    }
  }
`;

export const QUERY_FEED_USERS = gql`
  {
    userFeed {
      firstName
      lastName
      location
      bio
      userName
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

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      location
      bio
      userName
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

export const QUERY_ACTIVITY_LEVEL = gql`
  {
    activityLevel {
      _id
      name
      activityLevel
    }
  }
`