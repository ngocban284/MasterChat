import { gql } from '@apollo/client';

export const TRANSLATION = gql`
  mutation translation($text: String!) {
    translation(text: $text) {
      translatedText
      errorMsg
    }
  }
`;
