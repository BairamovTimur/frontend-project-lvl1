import getRandomNumber from '../rand.js';
import gameEngine from '../index.js';

const resultRound = () => {
  const first = getRandomNumber();
  const step = getRandomNumber();
  const sizeArr = 10;

  const hiddenPositionIndex = getRandomNumber(0, sizeArr - 1);
  const progression = [...Array(sizeArr)].map((elem, idx) => first + step * idx);
  const correctAnswer = String(progression[hiddenPositionIndex]);
  progression[hiddenPositionIndex] = '..';
  const questionText = progression.join(' ');

  return { questionText, correctAnswer };
};

export default () => {
  const conditionOfGame = 'What number is missing in the progression?';
  gameEngine(resultRound, conditionOfGame);
};
