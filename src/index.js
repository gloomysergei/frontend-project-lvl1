/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

// export const greeting = () => {
//   console.log('Welcome to the Brain Games!');
//   const name = readlineSync.question('May I have your name  ');
//   console.log(`Hello, ${name}!`);
//   return name;
// };

export const getRandomInt = (min, max) => {
  const counter = Math.floor(Math.random() * (max - min)) + min;
  return counter;
};
const flow = (descriptionGame, nameGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name  ');
  console.log(`Hello, ${name}!`);
  console.log(descriptionGame);
  for (let i = 0; i <= 2; i += 1) {
    const [question, correctAnswer] = nameGame();
    console.log(correctAnswer);
    const answer = (readlineSync.question(`Question: ${question} `));
    console.log(`Your answer: ${answer} `);
    if (answer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations ${name}!`);
};
export default flow;
