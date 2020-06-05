const getRandomNumber = (min = 1, max = 10) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export default getRandomNumber;
