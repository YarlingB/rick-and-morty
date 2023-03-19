import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStateType } from '../../types/common';

export const useReduxSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
