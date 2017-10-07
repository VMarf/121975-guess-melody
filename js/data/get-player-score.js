const getPlayerScore = (answers, remainingNotes) => {
  const MAX_ANSWERS = 10;
  const MAX_QUICK_ANSWER_TIME = 30000; // милисекунды

  // Если игрок ответил не на все вопросы, то он проиграл
  if (answers.length < MAX_ANSWERS && remainingNotes > 0) {
    return -1;
  }

  // Получаем сумму очков, если игрок ответил на все вопросы
  // Основываемся на том, что answers это массив объектов
  // Один объект - ответ
  // У объекта есть свойство correctly, которое показывает правильность ответа (true или false)
  // У объекта есть свойство time, которое показывает за сколько милисекунд ответ был дан
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
