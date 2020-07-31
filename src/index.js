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
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = nameGame();
    const answer = (readlineSync.question(`Question: ${question} `));
    console.log(`Your answer: ${answer} `);
    if (answer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
      break;
    }
  }
  console.log(`Congratulations ${name}!`);
};
export default flow;
