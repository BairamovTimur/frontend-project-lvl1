const getRandomNumber = (min = 1, max = 10) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

const getRandomMatematicOperation = () => {
  const operations = ['+', '-', '*'];
  const idx = getRandomNumber(0, operations.length - 1);

  return operations[idx];
};

export default getRandomNumber;
export { getRandomMatematicOperation };
