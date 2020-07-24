/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js';

const greatestCommonDivisor = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return (num1 + num2);
};

export const gcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    const result = greatestCommonDivisor(firstNumber, secondNumber);
    const answer = Number(readlineSync.question(`Question: ${firstNumber} ${secondNumber} `));
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
