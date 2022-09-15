import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Get_users {
    users {
      id
      email
      created_at
      profile {
        first_name
        last_name
      }
      department_name
      position_name
      role
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        first_name
        last_name
        full_name
        skills {
          skill_name
        }
        languages {
          language_name
        }
      }
      department_name
      position_name
      role
    }
  }
`;
