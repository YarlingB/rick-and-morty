import { useDispatch } from 'react-redux';
import { AppDispatchType } from '../../types/common';

export const useReduxDispatch = () => useDispatch<AppDispatchType>();
