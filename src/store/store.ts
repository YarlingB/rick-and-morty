import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game/game';

export const store = configureStore({
  reducer: { gameReducer },
});

export const storeState = store.getState;
export const storeDispatch = store.dispatch;
