/* eslint-disable no-mixed-operators */
import { graphql } from 'msw';
import mockCharacters from './characters/characters.json';
import { ICharacterResult } from 'interfaces/characters';

export const handlers = [
  // Handles "FIND_CHARACTERS" query
  graphql.query<ICharacterResult>('FIND_CHARACTERS', (req, res, ctx) => {
    const { data: characters } = mockCharacters;
    return res(ctx.data(characters));
  }),
];
