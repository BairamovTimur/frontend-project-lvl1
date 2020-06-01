import readlineSync from 'readline-sync';

const playGame = (userName, resultRound, conditionOfGame) => {
  const countRounds = 3;
  console.log(conditionOfGame);

  for (let i = 0; i < countRounds; i += 1) {
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

const setUserData = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default (resultRound, conditionOfGame) => {
  const userName = setUserData();
  playGame(userName, resultRound, conditionOfGame);
};

export { setUserData };
