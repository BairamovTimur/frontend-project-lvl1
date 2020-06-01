import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const resultRound = () => {
  const randomNumber = getRandomNumber();

  const questionText = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(resultRound, conditionOfGame);
};
