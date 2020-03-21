import readlineSync from 'readline-sync';

const checkParity = () => {
  const actual = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(actual);
};
export default checkParity;
