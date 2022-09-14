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
