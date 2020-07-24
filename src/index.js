/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

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
