import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      created_at
      profile {
        id
        first_name
        last_name
        full_name
        avatar
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
        id
        avatar
        first_name
        last_name
        full_name
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      department {
        id
      }
      position {
        id
      }
      department_name
      position_name
      role
    }
  }
`;
