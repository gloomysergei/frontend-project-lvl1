import flow from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';
export const makeProgression = () => {
  const firstTerm = getRandomInt(1, 100);
  const diff = getRandomInt(1, 100);
  const positionElem = getRandomInt(0, 10);
  let number = 10;
  const expression = [firstTerm];
  let temp = firstTerm;
  while (number > 0) {
    const nextTerm = temp + diff;
    expression.push(nextTerm);
    temp = nextTerm;
    number -= 1;
  }
  const correctAnswer = expression.splice(positionElem, 1, '..').join(' ');
  return [expression, correctAnswer];
};
export const runGame = () => flow(description, makeProgression);
