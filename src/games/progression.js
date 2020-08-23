import runEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const makeProgression = (firstElement, diff) => {
  const progression = [firstElement];
  let temp = firstElement;
  for (let index = 0; index < progressionLength; index += 1) {
    const nextElement = temp + diff;
    progression.push(nextElement);
    temp = nextElement;
  }
  return progression;
};
export const getProgressionData = () => {
  const firstElement = getRandomInt(1, 100);
  const diff = getRandomInt(1, 100);
  const positionElem = getRandomInt(0, 10);
  const question = makeProgression(firstElement, diff);
  const correctAnswer = question.splice(positionElem, 1, '..').join(' ');
  return [question, correctAnswer];
};
export const runGame = () => runEngine(description, getProgressionData);
