// Проверяем элемент в массиве
const checkArrayHasElement = (array, element) => {
  const elementIndex = array.indexOf(element);

  // Если элемент в массиве есть, возвращаем true, если нет, возвращаем false
  return elementIndex > -1;
};

// Добавляем ответ к остальным ответам игрока
const addPlayerAnswer = (state, currentPlayer, answerBoolean) => {

  // Если ответ неправильный, увеличиваем количество ошибок
  if (answerBoolean === false) {
    state.mistakes++;
  }

  currentPlayer.answers.push({
    correctly: answerBoolean,
    time: 35
  });
};

const checkAnswer = (state, question, answer, currentPlayer) => {
  let answerBoolean;

  // Проверка ответа для игрового экрана с выбором исполнителя
  if (question.type === `artist`) {

    // Узнаем правильный ответ или нет
    answerBoolean = answer === question.correctAnswer;

    addPlayerAnswer(state, currentPlayer, answerBoolean);

    return;
  }

  // Проверка ответа для игрового экрана с музыкальным жанром
  if (question.type === `genre`) {

    // Узнаем правильный ответ или нет
    answerBoolean = answer.every((answerItem) => checkArrayHasElement(question.correctAnswer, answerItem));

    addPlayerAnswer(state, currentPlayer, answerBoolean);
  }
};

export default checkAnswer;
