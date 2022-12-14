import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
        role
        email
        profile {
          avatar
          id
          full_name
        }
      }
      access_token
    }
  }
`;
