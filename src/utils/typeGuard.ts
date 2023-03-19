import { CharacterStatusType } from 'types/common';
import { CHARACTER_STATUS } from './constants';

export const isNumber = (x: any): x is number => typeof x === 'number';

export const isString = (x: any): x is string => typeof x === 'string';

export const isOfType = <T>(
  varToBeChecked: any,
  propertyToCheckFor: keyof T
): varToBeChecked is T =>
  (varToBeChecked as T)[propertyToCheckFor] !== undefined;

export const isCharacterStatus = (x: any): x is CharacterStatusType =>
  CHARACTER_STATUS.includes(x);
