import { gql } from '@apollo/client';

export const QUERY_ACTIVITIES = gql`
  query getActivities($category: ID) {
    activities(category: $category) {
      _id
      name
      description
      price
      quantity
      intensity
      XP
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_ACTIVITIES = gql`
  {
    activities {
      _id
      name
      description
      price
      quantity
      intensity
      XP
      category {
        name
        price
        intensity
        XP
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
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
        activities {
          _id
          name
          description
          price
          quantity
          intensity
          XP
          image
        }
      }
    }
  }
`;
