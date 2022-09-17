import { gql } from '@apollo/client';

export const GET_CVS = gql`
  query GetCvs {
    cvs {
      id
      created_at
      name
      description
      user {
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
      skills {
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
      is_template
    }
  }
`;

export const GET_CV_BY_ID = gql`
  query GetCvById($id: ID!) {
    cv(id: $id) {
      id
      created_at
      name
      description
      user {
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
      skills {
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
      is_template
    }
  }
`;
