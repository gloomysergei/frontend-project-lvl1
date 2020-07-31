/* eslint-disable import/no-duplicates */
/* eslint-disable import/prefer-default-export */
import flow from '../index.js';
import { getRandomInt } from '../index.js';

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
const descriptionStr = 'What is the result of the expression?';
export const calc = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operand = getRandomOperand(arrOperand);
  const expression = `${firstNumber} ${operand} ${secondNumber} `;
  const correctAnswer = carryOutOperation(firstNumber, secondNumber, operand);
  return [expression, correctAnswer];
};
flow(descriptionStr, calc);
