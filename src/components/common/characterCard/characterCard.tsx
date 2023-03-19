import { useEffect, useState } from 'react';
import { useReduxDispatch } from 'hooks/useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from 'hooks/useReduxSelector/useReduxSelector';
import { gameState, selectCard } from 'store/game/game';
import RMCard from '../card/card';
import RMButton from '../button/button';
import { getStatusIcon } from 'utils/characters';
import rmCardBack from '../../../assets/rick-morty-card.png';
import './styles.scss';

interface IRMCharacterCard {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
  className?: string;
  isCardDown?: boolean;
  handleOnClick?: Function;
}
const RMCharacterCard = ({
  id,
  image,
  name,
  species,
  status,
  className = '',
  isCardDown = false,
  handleOnClick,
}: IRMCharacterCard) => {
  const [cardFound, setcardFound] = useState(false);
  const dispatch = useReduxDispatch();
  const {
    areCardsBlocked,
    gameStarted,
    cardsSelected,
    charactersFound,
    cardsToRestore,
  } = useReduxSelector(gameState);

  const [cardDown, setCardDown] = useState(isCardDown);
  const statusIcon = getStatusIcon(status);
  const handleFlipCard = () => {
    if (gameStarted && !areCardsBlocked && cardsSelected.length < 2) {
      setCardDown((prevStatus) => !prevStatus);
      dispatch(selectCard(Number(id)));
    }
    if (cardsSelected.length === 1) {
      if (handleOnClick) {
        handleOnClick(id);
      }
    }
  };

  useEffect(() => {
    if (cardsToRestore.length === 2) {
      const restoreCharacterCard = cardsToRestore.find(
        (characterId) => characterId === Number(id)
      );
      if (restoreCharacterCard) {
        setCardDown(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsToRestore]);

  useEffect(() => {
    setCardDown(isCardDown);
  }, [isCardDown]);

  useEffect(() => {
    const isCharacterFound = charactersFound.find(
      (characterId) => characterId === Number(id)
    );
    if (isCharacterFound) {
      setcardFound(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charactersFound]);

  return (
    <>
      {cardFound && (
        <>
          <section className={`found_character`} />
        </>
      )}
      {!cardFound && (
        <RMCard className={className}>
          <RMButton
            className='w-100 h-100'
            variant='none'
            size='none'
            onClick={handleFlipCard}
          >
            {cardDown ? (
              <>
                <img
                  src={rmCardBack}
                  alt='character'
                  className='character_photo card_down'
                />
              </>
            ) : (
              <>
                <img src={image} alt='character' className='character_photo' />
                <section className='character_description'>
                  <p className='character_name'>{name}</p>
                  <section className='character_status'>
                    <p>{species}</p>
                    <img src={statusIcon} alt='character' />
                    <p> {status}</p>
                  </section>
                </section>
              </>
            )}
          </RMButton>
        </RMCard>
      )}
    </>
  );
};

export default RMCharacterCard;
