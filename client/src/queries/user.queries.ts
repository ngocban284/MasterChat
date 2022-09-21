import { gql } from '@apollo/client';

export const NEW_USER = gql`
  subscription newUser {
    newUser {
      id
      nickname
      avatar
      lang
    }
  }
`;

export const DELETE_USER = gql`
  mutation {
    deleteUser
  }
`;

export const SUBCRIBE_DELETE_USER = gql`
  subscription deleteUser {
    deleteUser {
      id
    }
  }
`;
