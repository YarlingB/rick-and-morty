/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { ICharacterResult } from '../../interfaces/characters';
import { FIND_CHARACTERS } from '../../services/graphQL/characters';
import { addGameCharacters, gameCharacters } from '../../store/game/game';
import { TOTAL_CHARACTERS } from '../../utils/constants';
import { useReduxDispatch } from '../useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from '../useReduxSelector/useReduxSelector';

const useRMCharacters = () => {
  const characters = useReduxSelector(gameCharacters);
  const dispatch = useReduxDispatch();
  const [findCharacters, { data, loading, error }] =
    useLazyQuery<ICharacterResult>(FIND_CHARACTERS);

  useEffect(() => {
    if (characters.length !== TOTAL_CHARACTERS) {
      findCharacters();
    }
  }, []);

  useEffect(() => {
    if (data) {
      const {
        characters: { results },
      } = data;

      const setCharacters = [...results].splice(0, TOTAL_CHARACTERS);
      dispatch(addGameCharacters(setCharacters));
    }
  }, [data]);

  return { loading, data: characters, error };
};

export default useRMCharacters;
