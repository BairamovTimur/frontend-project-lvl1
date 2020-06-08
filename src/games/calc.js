import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const getRandomMatematicOperation = () => {
  const operations = ['+', '-', '*'];
  const idx = getRandomNumber(0, operations.length - 1);

  return operations[idx];
};

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

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operation = getRandomMatematicOperation();

  const questionText = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operation));

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'What is the result of the expression?';
  gameEngine(generateRound, conditionOfGame);
};
