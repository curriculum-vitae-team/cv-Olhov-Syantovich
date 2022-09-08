import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation SignUp($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        role
        email
        profile {
          full_name
        }
      }
      access_token
    }
  }
`;
