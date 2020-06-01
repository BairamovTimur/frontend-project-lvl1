import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const resultRound = () => {
  const randomNumber = getRandomNumber();

  const questionText = randomNumber;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(resultRound, conditionOfGame);
};
