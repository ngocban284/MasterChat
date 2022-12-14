import { gql } from '@apollo/client';

export const NEW_MESSAGE = gql`
  subscription newMessage {
    newMessage {
      id
      text
      source
      createdAt
      user {
        id
        nickname
        avatar
        lang
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!) {
    createMessage(text: $text)
  }
`;

export const ALL_MESSAGES_BY_PAGE = gql`
  query allMessagesByPage($page: Int!) {
    allMessagesByPage(page: $page) {
      messages {
        id
        text
        source
        createdAt
        user {
          id
          nickname
          avatar
          lang
        }
      }
      nextPage
    }
  }
`;

export const CREATE_SYSTEM_MESSAGE = gql`
  mutation createSystemMessage($source: String!) {
    createSystemMessage(source: $source)
  }
`;
