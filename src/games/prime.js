/* eslint-disable import/prefer-default-export */

import flow, { getRandomInt } from '../index.js';

const descriptionStr = 'Answer "yes" if given number is prime. Otherwise answer "no"';
export const getPrimeNumber = () => {
  const number = getRandomInt(1, 100);
  let result = 'yes';
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      result = 'no';
    }
  }
  return [number, result];
};
flow(descriptionStr, getPrimeNumber);
