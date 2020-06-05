import readlineSync from 'readline-sync';

const playGame = (resultRound, conditionOfGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const roundsCount = 3;
  console.log(conditionOfGame);

  for (let i = 0; i < roundsCount; i += 1) {
    const { questionText, correctAnswer } = resultRound();
    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

const gameEngine = (resultRound, conditionOfGame) => {
  playGame(resultRound, conditionOfGame);
};

export default gameEngine;
