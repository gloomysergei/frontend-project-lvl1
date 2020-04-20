
import readlineSync from 'readline-sync';

const arrOperand = ['+', '-', '*'];

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name  ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (min, max) => {
  const counter = Math.floor(Math.random() * (max - min)) + min;
  return counter;
};
export const getRandomOperand = (arr) => {
  const operand = Math.floor(Math.random() * ((arr.length - 1)) + 1);
  return operand;
};
const carryOutOperation = (firstNum, secondNum, sign) => {
  let result = 0;
  if (sign === '+') {
    result = firstNum + secondNum;
  }
  if (sign === '-') {
    result = firstNum - secondNum;
  }
  if (sign === '*') {
    result = firstNum * secondNum;
  }
  if (sign === '/') {
    result = firstNum / secondNum;
  }
  return result;
};

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
    console.log(`Congratulations ${name}!`);
  }
};

export const calc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const operand = getRandomOperand(arrOperand);
    const result = carryOutOperation(firstNumber, secondNumber, operand);
    const answer = (readlineSync.question(`Question: ${firstNumber} ${operand} ${secondNumber}`));
    console.log(`Your answer: ${answer}`);
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log(`Congratulations ${name}!`);
  }
};
