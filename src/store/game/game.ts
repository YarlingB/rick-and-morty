import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, IGameFinished } from '../../interfaces/characters';
import { IGameStore } from '../../interfaces/store';
import { RootStateType } from '../../types/common';

export const initialStateGame: IGameStore = {
  gameFinished: false,
  gameStarted: false,
  gameRestarted: false,
  gameShifts: 0,
  hitsCounts: 0,
  characters: [] as ICharacter[],
  areCardsBlocked: true,
  cardsSelected: [],
  charactersFound: [],
  cardsToRestore: [],
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: initialStateGame,
  reducers: {
    finishGame: (state: IGameStore, action: PayloadAction<IGameFinished>) => {
      state.gameFinished = true;
      state.gameStarted = false;
      state.gameShifts = action.payload.shifts;
      state.hitsCounts = action.payload.hits;
    },
    startGame: (state) => {
      state.gameRestarted = false;
      state.gameFinished = false;
      state.gameStarted = true;
      state.areCardsBlocked = false;
    },
    addGameCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
    blockCards: (state) => {
      state.areCardsBlocked = true;
    },
    unblockCards: (state) => {
      state.areCardsBlocked = false;
    },
    selectCard: (state, action: PayloadAction<number>) => {
      if (state.cardsSelected.length > 1) {
        state.areCardsBlocked = true;
      }
      if (state.cardsSelected.length < 2) {
        state.cardsSelected = [...state.cardsSelected, action.payload];
      }
    },
    addCharacterFound: (state, action: PayloadAction<number>) => {
      state.charactersFound = [...state.charactersFound, action.payload];
      state.cardsSelected = [];
      state.areCardsBlocked = false;
    },
    restoreCards: (state, action: PayloadAction<number[]>) => {
      state.cardsSelected = [];
      state.areCardsBlocked = false;
      state.cardsToRestore = [...action.payload];
    },
    restartGame: (state, action: PayloadAction<ICharacter[]>) => {
      return {
        ...initialStateGame,
        characters: action.payload,
        gameRestarted: true,
      };
    },
    setInitialStateWithCharacters: (
      state,
      action: PayloadAction<ICharacter[]>
    ) => {
      return {
        ...initialStateGame,
        characters: action.payload,
      };
    },
  },
});

export const gameCharacters = (state: RootStateType) =>
  state.gameReducer.characters;
export const gameFinished = (state: RootStateType) =>
  state.gameReducer.gameFinished;
export const shiftsCount = (state: RootStateType) =>
  state.gameReducer.gameShifts;
export const gameState = (state: RootStateType) => state.gameReducer;

export const {
  finishGame,
  setInitialStateWithCharacters,
  startGame,
  blockCards,
  addGameCharacters,
  unblockCards,
  selectCard,
  addCharacterFound,
  restoreCards,
  restartGame,
} = gameSlice.actions;
export default gameSlice.reducer;
