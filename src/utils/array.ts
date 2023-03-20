/* eslint-disable no-sequences */
export const shuffleArray = <T>(arr: T[]) => {
  const initialReduceValues = [[...arr], []];
  const res = arr.reduce(
    ([original, shuffled]) => (
      shuffled.push(
        ...original.splice((Math.random() * original.length) | 0, 1)
      ),
      [original, shuffled]
    ),
    initialReduceValues
  )[1];
  return res;
};

export const duplicateArrayValues = <T>(array: T[]) => {
  const arrayDuplicated = array.flatMap((i) => [i, i]);
  return arrayDuplicated;
};
