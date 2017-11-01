// Проверяем элемент в массиве
const checkArrayHasElement = (element, array) => {
  const elementIndex = array.indexOf(element);

  // Если элемент в массиве есть, возвращаем true, если нет, возвращаем false
  return elementIndex > -1;
};

// Проверяем ответ для игровых экранов с выбором жанра
const checkGenreAnswer = (answer, correctAnswer) => {
  if (answer.length === correctAnswer.length) {
    return answer.every((answerItem) => checkArrayHasElement(answerItem, correctAnswer));
  }

  return false;
};

// Добавляем ответ к остальным ответам игрока
const addPlayerAnswer = (state, currentPlayer, answerBoolean, answerTime) => {

  // Если ответ неправильный, увеличиваем количество ошибок
  if (answerBoolean === false) {
    state.mistakes++;
  }

  currentPlayer.answers.push({
    correctly: answerBoolean,
    time: answerTime
  });
};

const checkAnswer = (state, question, answer, answerTime, currentPlayer) => {
  let answerBoolean;

  // Проверка ответа для игрового экрана с выбором исполнителя
  if (question.type === `artist`) {

    // Узнаем правильный ответ или нет
    answerBoolean = answer === question.correctAnswer;

    addPlayerAnswer(state, currentPlayer, answerBoolean, answerTime);

    return;
  }

  // Проверка ответа для игрового экрана с музыкальным жанром
  if (question.type === `genre`) {

    // Узнаем правильный ответ или нет
    answerBoolean = checkGenreAnswer(answer, question.correctAnswer);

    addPlayerAnswer(state, currentPlayer, answerBoolean, answerTime);
  }
};

export default checkAnswer;
