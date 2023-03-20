/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import useRMCharacters from 'hooks/useRMCharacters/useRMCharacters';
import { useReduxDispatch } from 'hooks/useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from 'hooks/useReduxSelector/useReduxSelector';
import RMCharactersHeader from 'components/common/charactersWrapper/charactersHeader/charactersHeader';
import RMCharactersWrapper from 'components/common/charactersWrapper/charactersWrapper';
import RMCharactersContent from 'components/common/charactersWrapper/charactersContent/charactersContent';
import RMCharactersFooter from 'components/common/charactersWrapper/charactersFooter/charactersFooter';
import RMButton from 'components/common/button/button';
import SetUpGame from 'components/play/play';
import {
  finishGame,
  gameState,
  restartGame,
  setInitialStateWithCharacters,
} from 'store/game/game';
import GameFinished from 'components/gameFinished/gameFinished';

import { TOTAL_CHARACTERS } from 'utils/constants';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'routes/routes';
import CardSkeleton from 'components/common/skeleton/cardSkeleton/cardSkeleton';

const PlayPage = () => {
  const navigate = useNavigate();

  const {
    gameFinished: isGameFinished,
    hitsCounts,
    gameShifts,
    characters,
  } = useReduxSelector(gameState);
  const dispatch = useReduxDispatch();
  const [hits, setHits] = useState(hitsCounts);
  const [quantityOfShifts, setQuantityOfShifts] = useState(gameShifts);
  const { data: rmCharacters, error, loading } = useRMCharacters();

  const addNewShift = () => {
    setQuantityOfShifts((prevState) => prevState + 1);
  };
  const setNewHit = () => {
    setHits((prevState) => prevState + 1);
  };
  const handleRepeatAgain = () => {
    dispatch(restartGame(characters));
  };
  const handleGoHome = () => {
    dispatch(setInitialStateWithCharacters(characters));
    navigate(`${ROUTES.ROOT}`);
  };

  useEffect(() => {
    if (hits === TOTAL_CHARACTERS) {
      dispatch(finishGame({ hits, shifts: quantityOfShifts }));
    }
  }, [hits]);
  useEffect(() => {
    setHits(hitsCounts);
  }, [hitsCounts]);
  useEffect(() => {
    setQuantityOfShifts(gameShifts);
  }, [gameShifts]);

  return (
    <>
      <RMCharactersWrapper characters={rmCharacters}>
        <RMCharactersHeader>
          <>
            {!isGameFinished && (
              <section className='play_header'>
                <p>Aciertos: {hits}</p>
                <p>Turnos: {quantityOfShifts}</p>
              </section>
            )}
          </>
        </RMCharactersHeader>
        <RMCharactersContent>
          {loading || error ? (
            <CardSkeleton />
          ) : (
            <>
              {rmCharacters && !isGameFinished && (
                <SetUpGame
                  addNewShift={addNewShift}
                  setNewHit={setNewHit}
                  characters={rmCharacters}
                />
              )}
              {isGameFinished && <GameFinished />}
            </>
          )}
        </RMCharactersContent>
        <RMCharactersFooter>
          <section
            className={`game_actions ${
              !isGameFinished ? 'now_playing' : 'game_finished'
            }`}
          >
            {isGameFinished && (
              <RMButton
                className='play_button'
                variant='contained'
                color='secondary'
                onClick={handleRepeatAgain}
              >
                <p>Repetir</p>
              </RMButton>
            )}
            <RMButton
              onClick={handleGoHome}
              className='play_button'
              variant='outlined'
              color='primary'
            >
              <p>{isGameFinished ? 'Inicio' : 'Volver'}</p>
            </RMButton>
          </section>
        </RMCharactersFooter>
      </RMCharactersWrapper>
    </>
  );
};

export default PlayPage;
