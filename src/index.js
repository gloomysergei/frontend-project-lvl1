import readlineSync from 'readline-sync';

const roundsCount = 3;
const runEngine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name  ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let round = 1; round <= roundsCount; round += 1) {
    const [question, correctAnswer] = getGameData();
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer} `);
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations ${name}!`);
};
export default runEngine;
