import { gql } from '@apollo/client';

export const EMPLOYEES = gql`
  query Employees {
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
