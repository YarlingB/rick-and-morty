import { gql } from '@apollo/client';

export const FIND_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        species
        status
        image
      }
    }
  }
`;
