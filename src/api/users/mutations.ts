import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation Create_user($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      created_at
      email
      profile {
        id
        created_at
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
      cvs {
        id
        created_at
        name
        description
        projects {
          id
          name
          internal_name
          description
          domain
          start_date
          end_date
          team_size
          tech_stack {
            id
            name
          }
        }
        skills {
          mastery
          skill_name
        }
        is_template
        languages {
          language_name
          proficiency
        }
      }
      department_name
      position_name
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Update_user($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      created_at
      email
      profile {
        full_name
        last_name
        first_name
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      department_name
      position_name
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation Delete_user($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`;
