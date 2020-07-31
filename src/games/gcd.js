/* eslint-disable import/no-duplicates */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import flow from '../index.js';
import { getRandomInt } from '../index.js';

const greatestCommonDivisor = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return String(num1 + num2);
};
const descriptionStr = 'Find the greatest common divisor of given numbers.';
export const gcd = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = greatestCommonDivisor(firstNumber, secondNumber);
  const expression = `${firstNumber} ${secondNumber} `;
  return [expression, correctAnswer];
};
flow(descriptionStr, gcd);
