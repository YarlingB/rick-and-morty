// @ts-nocheck

import { isNumber, isOfType, isString } from './typeGuard';
import charactersMock from '../mocks/characters/characters.json';
import { ICharacterResult } from 'interfaces/characters';

describe('Type guard to test if parameter is number', () => {
  it('should return a boolean as result if parameter is Number', function () {
    const isNumberType = isNumber(100);
    expect(isNumberType).toBe(true);
  });
  it('should return a false', function () {
    const isNumberType = isNumber('100');
    expect(isNumberType).toBe(false);
  });
});

describe('Type guard to test if parameter is string', () => {
  it('should return a false', function () {
    const isStringType = isString(100);
    expect(isStringType).toBe(false);
  });
  it('should return a true', function () {
    const isStringType = isString('100');
    expect(isStringType).toBe(true);
  });
});

describe('Type guard to test if parameter is of a type', () => {
  const { data } = charactersMock;
  it('should return false', function () {
    const checkType = isOfType<ICharacterResult>(data, 'name');
    expect(checkType).toBe(false);
  });

  it('should return true', function () {
    const checkType = isOfType<ICharacterResult>(data, 'characters');
    expect(checkType).toBe(true);
  });
});
