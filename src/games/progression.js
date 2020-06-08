import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const generateRound = () => {
  const first = getRandomNumber();
  const step = getRandomNumber();
  const size = 10;

  const hiddenPositionIndex = getRandomNumber(0, size - 1);
  const progression = [...Array(size)].map((elem, idx) => first + step * idx);
  const correctAnswer = String(progression[hiddenPositionIndex]);
  progression[hiddenPositionIndex] = '..';
  const questionText = progression.join(' ');

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'What number is missing in the progression?';
  gameEngine(generateRound, conditionOfGame);
};
