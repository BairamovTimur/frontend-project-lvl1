import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber();

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { randomNumber, correctAnswer };
};

export default () => {
  const conditionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(generateRound, conditionOfGame);
};
