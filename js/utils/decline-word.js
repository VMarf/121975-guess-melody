const CASES = [2, 0, 1, 1, 1, 2];

const getCase = (number) => {
  if (number < 1) {
    return 2;
  }

  if (number % 100 > 4 && number % 100 < 20) {
    return 2;
  }

  return CASES[(number % 10 < 5) ? number % 10 : 5];
};

const declineWord = (number, wordVariants) => {
  return wordVariants[getCase(number)];
};

export default declineWord;
