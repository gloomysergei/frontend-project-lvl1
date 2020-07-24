/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js';

export const getPrimeNumber = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    let result = 'yes';
    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        result = 'no';
      }
    }
    const answer = readlineSync.question(`Question: ${number}  `);
    console.log(`Your answer: ${answer}`);
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
