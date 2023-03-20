import { CHARACTER_STATUS } from 'utils/constants';
import { storeState, storeDispatch } from '../store/store';

export type RootStateType = ReturnType<typeof storeState>;
export type AppDispatchType = typeof storeDispatch;

export type CharacterStatusType = typeof CHARACTER_STATUS[number];

export type SizeType = 'sm' | 'md' | 'lg' | 'none';
export type ColorType = 'primary' | 'secondary';
export type VariantType = 'outlined' | 'contained' | 'text' | 'none';
