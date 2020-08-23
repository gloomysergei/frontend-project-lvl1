import runEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const operators = ['+', '-', '*'];
const calculate = (firstNum, secondNum, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      throw new Error(`Недопустимая операция: ${sign}`);
  }
  return result;
};
const description = 'What is the result of the expression?';
export const getCalcData = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber} `;
  const correctAnswer = String(calculate(firstNumber, secondNumber, operator));
  return [question, correctAnswer];
};
export const runGame = () => runEngine(description, getCalcData);
