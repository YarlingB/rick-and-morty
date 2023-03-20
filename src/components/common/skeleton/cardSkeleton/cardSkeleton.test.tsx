/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import { TOTAL_CARDS } from 'utils/constants';
import CardSkeleton from './cardSkeleton';

describe('Characters list', () => {
  it('should', () => {
    const { container } = render(<CardSkeleton />);
    const skeleton = container.getElementsByClassName('skeleton');
    expect(skeleton.length).toBe(TOTAL_CARDS);
  });
});
