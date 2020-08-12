import readlineSync from 'readline-sync';

const roundGame = 3;
const flow = (description, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name  ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 1; i <= roundGame; i += 1) {
    const [question, correctAnswer] = getDataGame();
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer} `);
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations ${name}!`);
};
export default flow;
