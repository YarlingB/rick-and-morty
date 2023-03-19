import { ICharacter } from './characters';

export interface IMatchCharacter {
  id: string;
  matched: boolean;
  positions: {
    first: number;
    second: number;
  };
  image?: string;
}

export interface IGameStore {
  gameFinished: boolean;
  gameStarted: boolean;
  gameRestarted: boolean;
  gameShifts: number;
  hitsCounts: number;
  characters: ICharacter[];
  areCardsBlocked: boolean;
  cardsSelected: number[];
  charactersFound: number[];
  cardsToRestore: number[];
}
