import runFlow from '../index.js';
import { getRandomInt } from '../utils.js';

const isEvenNumber = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export const checkParity = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export const runGame = () => runFlow(description, checkParity);
