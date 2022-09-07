import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($auth: AuthInput!) {
    login(auth: $auth) {
      user
      access_token
    }
  }
`;
