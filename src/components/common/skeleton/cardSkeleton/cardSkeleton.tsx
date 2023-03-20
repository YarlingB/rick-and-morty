import { TOTAL_CARDS } from 'utils/constants';
import './styles.scss';

const CardSkeleton = () => {
  const totalCards = TOTAL_CARDS;
  const skeletons = [...Array(totalCards)];
  return (
    <>
      {skeletons.map((e, i) => (
        <section key={`skeleton-${i}`} className='skeleton' />
      ))}
    </>
  );
};

export default CardSkeleton;
