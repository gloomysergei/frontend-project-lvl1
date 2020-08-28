import runEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const isEvenNumber = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getEvenData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};
export const runGame = () => runEngine(description, getEvenData);
