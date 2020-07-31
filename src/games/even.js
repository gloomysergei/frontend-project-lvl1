/* eslint-disable import/no-duplicates */
/* eslint-disable import/prefer-default-export */
import flow from '../index.js';
import { getRandomInt } from '../index.js';

const descriptionStr = 'Answer "yes" if the number is even, otherwise answer "no".';
export const checkParity = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};
flow(descriptionStr, checkParity);
