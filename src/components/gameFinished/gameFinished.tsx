import { useReduxSelector } from 'hooks/useReduxSelector/useReduxSelector';
import { shiftsCount } from 'store/game/game';
import './styles.scss';

const GameFinished = () => {
  const totalShifts = useReduxSelector(shiftsCount);
  return (
    <section className='end_game_wrapper'>
      <p className='congrats_text'>¡Felicitaciones!</p>
      <strong>Terminaste el juego con {totalShifts} turnos</strong>
    </section>
  );
};

export default GameFinished;
