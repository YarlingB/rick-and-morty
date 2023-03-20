import { screen } from '@testing-library/react';
import { testRendererWithApollo } from '__test__/testRendererWithApollo';
import mockCharacters from '../../mocks/characters/characters.json';
import SetUpGame from './play';

describe('Tests for play component', () => {
  it('should render the character name', () => {
    const mockAddNewShift = jest.fn();
    const mockSetNewHit = jest.fn();
    const {
      data: {
        characters: { results },
      },
    } = mockCharacters;
    testRendererWithApollo(
      <SetUpGame
        characters={results}
        addNewShift={mockAddNewShift}
        setNewHit={mockSetNewHit}
      />
    );

    const allText = screen.getAllByText(/Aqua Morty/);
    expect(allText.length).toBeGreaterThan(0);
  });
});
