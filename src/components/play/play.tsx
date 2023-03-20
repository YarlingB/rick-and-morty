/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import RMCharacterCard from 'components/common/characterCard/characterCard';
import { useReduxDispatch } from 'hooks/useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from 'hooks/useReduxSelector/useReduxSelector';
import { ICharacter } from 'interfaces/characters';
import {
  addCharacterFound,
  gameState,
  startGame,
  restoreCards,
} from 'store/game/game';
import { duplicateArrayValues, shuffleArray } from 'utils/array';

interface ISetUpGameProps {
  characters: ICharacter[];
  addNewShift: () => void;
  setNewHit: () => void;
}
const SetUpGame = ({ characters, addNewShift, setNewHit }: ISetUpGameProps) => {
  const dispatch = useReduxDispatch();
  const { cardsSelected, gameRestarted } = useReduxSelector(gameState);

  const [cardDown, setCardDown] = useState(false);
  const [randomCards, setRandomCards] = useState<ICharacter[] | null>(null);

  const handleCardClick = () => {
    addNewShift();
  };
  const addNewCharacter = (cardId: number) => {
    setTimeout(() => {
      dispatch(addCharacterFound(cardId));
    }, 1000);
  };

  const restoreAllCards = (cardsId: number[]) => {
    setTimeout(() => {
      dispatch(restoreCards(cardsId));
    }, 1000);
  };

  useEffect(() => {
    if (cardsSelected.length === 2) {
      const isAMatch = cardsSelected[0] === cardsSelected[1];
      if (isAMatch) {
        setNewHit();
        addNewCharacter(cardsSelected[0]);
        return;
      }
      restoreAllCards([...cardsSelected]);
    }
  }, [cardsSelected]);

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      setCardDown(true);
      dispatch(startGame());
    }, 3000);
    return () => {
      clearTimeout(flipTimer);
    };
  }, []);

  useEffect(() => {
    if (randomCards === null) {
      const duplicateCharacters = duplicateArrayValues(characters);
      const shuffleCards = shuffleArray([...duplicateCharacters]);
      setRandomCards(shuffleCards);
    }
  }, [characters]);

  useEffect(() => {
    if (gameRestarted) {
      const duplicateCharacters = duplicateArrayValues(characters);
      const shuffleCards = shuffleArray([...duplicateCharacters]);
      setRandomCards(shuffleCards);
      const flipTimer = setTimeout(() => {
        setCardDown(true);
        dispatch(startGame());
      }, 3000);
      return () => {
        clearTimeout(flipTimer);
      };
    }
  }, [gameRestarted]);

  return (
    <>
      {randomCards &&
        randomCards.map(({ name, image, species, status, id }, index) => (
          <>
            <RMCharacterCard
              keyName={`play-card-${index}`}
              id={id}
              className='single_character'
              isCardDown={cardDown}
              image={image}
              name={name}
              species={species}
              status={status}
              handleOnClick={handleCardClick}
            />
          </>
        ))}
    </>
  );
};

export default SetUpGame;
