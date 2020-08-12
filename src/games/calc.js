import flow from '../index.js';
import { getRandomInt } from '../utils.js';

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
  return String(result);
};
const description = 'What is the result of the expression?';
export const makeCalculator = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operand = getRandomOperand(arrOperand);
  const question = `${firstNumber} ${operand} ${secondNumber} `;
  const correctAnswer = carryOutOperation(firstNumber, secondNumber, operand);
  return [question, correctAnswer];
};
export const runGame = () => flow(description, makeCalculator);
