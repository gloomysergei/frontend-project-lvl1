import runFlow from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrimeNumber = (number) => {
  let result = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
};
export const getPrimeNumber = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export const runGame = () => runFlow(description, getPrimeNumber);
