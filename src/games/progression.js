/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js';

export const findingTermAD = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const firstTerm = getRandomInt(1, 100);
    const diff = getRandomInt(1, 100);
    const positionElem = getRandomInt(0, 10);
    let number = 10;
    const result = [firstTerm];
    let temp = firstTerm;
    while (number > 0) {
      const nextTerm = temp + diff;
      result.push(nextTerm);
      temp = nextTerm;
      number -= 1;
    }
    const resultAnswer = Number(result.splice(positionElem, 1, '..').join(' '));
    const answer = Number(readlineSync.question(`Question: ${result} `));
    console.log(`Your answer: ${answer}`);
    if (resultAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${resultAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
