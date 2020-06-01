import getRandomNumber, { getRandomMatematicOperation } from '../rand.js';
import gameEngine from '../index.js';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const resultRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operation = getRandomMatematicOperation();

  const questionText = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operation));

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'What is the result of the expression?';
  gameEngine(resultRound, conditionOfGame);
};
