import runEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};
export const getPrimeData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};
export const runGame = () => runEngine(description, getPrimeData);
