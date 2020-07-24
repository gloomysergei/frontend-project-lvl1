/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js';

export const checkParity = () => {
  const name = greeting();
  const messageEnd = `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const counter = getRandomInt(1, 100);
    const answer = (readlineSync.question(`Question: ${counter} `));
    console.log(`Your answer: ${answer} `);
    if ((answer === 'yes' && counter % 2 === 0) || (answer === 'no' && counter % 2 !== 0)) {
      console.log('Correct');
    } else {
      console.log(messageEnd);
      break;
    }
  }
  console.log(`Congratulations ${name}!`);
};
