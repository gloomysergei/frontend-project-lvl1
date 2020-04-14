
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name\n');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (min, max) => {
  const counter = Math.floor(Math.random() * (max - min)) + min;
  return counter;
};

export const checkParity = () => {
  const messageEnd = "'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again,";
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
};
