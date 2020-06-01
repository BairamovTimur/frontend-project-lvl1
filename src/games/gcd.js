import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const greatestDivisor = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;

  while (num2 !== 0) {
    const tmp = num1 % (num2);
    num1 = num2;
    num2 = tmp;
  }

  return num1;
};

const resultRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const questionText = `${number1} ${number2}`;
  const correctAnswer = String(greatestDivisor(number1, number2));

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'Find the greatest common divisor of given numbers';
  gameEngine(resultRound, conditionOfGame);
};
