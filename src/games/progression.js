import runEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const makeProgression = (firstElement, diff) => {
  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    const nextElement = firstElement + diff * index;
    progression.push(nextElement);
  }
  return progression;
};
export const getProgressionData = () => {
  const firstElement = getRandomInt(1, 100);
  const diff = getRandomInt(1, 100);
  const positionElem = getRandomInt(0, progressionLength - 1);
  const progression = makeProgression(firstElement, diff);
  const correctAnswer = progression.splice(positionElem, 1, '..').join(' ');
  const question = progression;
  return [question, correctAnswer];
};
export const runGame = () => runEngine(description, getProgressionData);
