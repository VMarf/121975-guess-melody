const MAX_ANSWERS = 10;
const MAX_QUICK_ANSWER_TIME = 30; // секунды

const calculateScore = (answers) => {
  return answers.reduce((playerScore, answer) => {

    // За неправильный ответ отнимаем 2 очка
    if (!answer.correctly) {
      return playerScore - 2;
    }

    // За быстрый правильный ответ 2 очка
    if (answer.time <= MAX_QUICK_ANSWER_TIME) {
      return playerScore + 2;
    }

    // За медленный правильный ответ 1 очко
    return playerScore + 1;
  }, 0);
};

const getPlayerScore = (answers, remainingNotes) => {

  // Пример объекта в массиве answers
  //
  // {
  //   correctly: true,
  //   time: 25 (секунды)
  // }

  // Если игрок ответил не на все вопросы или у него кончились ноты, то он проиграл
  if (answers.length < MAX_ANSWERS || remainingNotes < 0) {
    return -1;
  }

  // Получаем сумму очков игрока
  return calculateScore(answers);
};

export default getPlayerScore;
