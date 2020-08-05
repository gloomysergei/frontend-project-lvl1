/* eslint-disable no-param-reassign */
import runFlow from '../index.js';
import { getRandomInt } from '../utils.js';

const greatestCommonDivisor = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return (num1 + num2);
};
const description = 'Find the greatest common divisor of given numbers.';
export const gcd = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = String(greatestCommonDivisor(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber} `;
  return [question, correctAnswer];
};
export const runGame = () => runFlow(description, gcd);
