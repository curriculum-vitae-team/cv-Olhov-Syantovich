import { gql } from '@apollo/client';

export const GET_POSITIONS = gql`
  query GetPositions {
    positions {
      id
      name
    }
  }
`;

export const GET_POSITION_BY_ID = gql`
  query GetPositionById($id: ID!) {
    position(id: $id) {
      id
      name
    }
  }
`;
