/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js';

const arrOperand = ['+', '-', '*'];
const getRandomOperand = (arr) => {
  const operand = arr[Math.floor(Math.random() * arr.length)];
  return operand;
};

const carryOutOperation = (firstNum, secondNum, sign) => {
  let result = 0;
  if (sign === '+') {
    result = firstNum + secondNum;
  } else if (sign === '-') {
    result = firstNum - secondNum;
  } else if (sign === '*') {
    result = firstNum * secondNum;
  }
  return result;
};

export const calc = () => {
  const name = greeting();
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    const operand = getRandomOperand(arrOperand);
    const result = carryOutOperation(firstNumber, secondNumber, operand);
    const answer = Number(readlineSync.question(`Question: ${firstNumber} ${operand} ${secondNumber} `));
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
