/* eslint-disable import/no-duplicates */
/* eslint-disable import/prefer-default-export */
import flow from '../index.js';
import { getRandomInt } from '../index.js';

const descriptionStr = 'Answer "yes" if the number is even, otherwise answer "no".';
export const checkParity = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};
flow(descriptionStr, checkParity);

// export const checkParity = () => {
//   const name = greeting();
//   const messageEnd = `'yes' is wrong answer ;
// (. Correct answer was 'no'.\n Let's try again, ${name}!`;
//
//   for (let i = 0; i < 3; i += 1) {
//     const counter = getRandomInt(1, 100);
//     const answer = (readlineSync.question(`Question: ${counter} `));
//     console.log(`Your answer: ${answer} `);
//     if ((answer === 'yes' && counter % 2 === 0) || (answer === 'no' && counter % 2 !== 0)) {
//       console.log('Correct');
//     } else {
//       console.log(messageEnd);
//       break;
//     }
//   }
//   console.log(`Congratulations ${name}!`);
// };
