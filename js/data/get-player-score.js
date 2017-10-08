const getPlayerScore = (answers, remainingNotes) => {

  // Пример объекта в массиве answers
  //
  // {
  //   correctly: true,
  //   time: 25 (секунды)
  // }

  const MAX_ANSWERS = 10;
  const MAX_QUICK_ANSWER_TIME = 30; // секунды

  // Если игрок ответил не на все вопросы или у него кончились жизни, то он проиграл
  if (answers.length < MAX_ANSWERS || remainingNotes < 0) {
    return -1;
  }

  // Получаем сумму очков игрока
  return answers.reduce((playerScore, answer) => {
    if (answer.correctly && answer.time <= MAX_QUICK_ANSWER_TIME) {
      return playerScore + 2;
    } else if (answer.correctly && answer.time > MAX_QUICK_ANSWER_TIME) {
      return playerScore + 1;
    } else {
      return playerScore - 2;
    }
  }, 0);
};

export default getPlayerScore;
