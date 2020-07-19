/* eslint-disable no-param-reassign */
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
    console.log(`Congratulations, ${name}!`);
  }
};

const greatestCommonDivisor = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      // eslint-disable-next-line no-param-reassign
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
    console.log(`Congratulations, ${name}!`);
  }
};

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
    console.log(`Congratulations, ${name}!`);
  }
};
