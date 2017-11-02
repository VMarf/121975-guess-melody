import {QuestionTypes} from './game.js';

// Проверяем ответ для игровых экранов с выбором жанра
const checkGenreAnswer = (answer, correctAnswer) => {
  if (answer.length === correctAnswer.length) {
    return answer.every((answerItem) => correctAnswer.includes(answerItem));
  }

  return false;
};

// Добавляем ответ к остальным ответам игрока
const addPlayerAnswer = (state, currentPlayer, isAnswerCorrect, answerTime) => {

  // Если ответ неправильный, увеличиваем количество ошибок
  if (isAnswerCorrect === false) {
    state.mistakes++;
  }

  currentPlayer.answers.push({
    correctly: isAnswerCorrect,
    time: answerTime
  });
};

const checkAnswer = (state, question, answer, answerTime, currentPlayer) => {
  let isAnswerCorrect;

  // Проверка ответа для игрового экрана с выбором исполнителя
  if (question.type === QuestionTypes.ARTIST) {

    // Узнаем правильный ответ или нет
    isAnswerCorrect = answer === question.correctAnswer;

    addPlayerAnswer(state, currentPlayer, isAnswerCorrect, answerTime);

    return;
  }

  // Проверка ответа для игрового экрана с музыкальным жанром
  if (question.type === QuestionTypes.GENRE) {

    // Узнаем правильный ответ или нет
    isAnswerCorrect = checkGenreAnswer(answer, question.correctAnswer);

    addPlayerAnswer(state, currentPlayer, isAnswerCorrect, answerTime);
  }
};

export default checkAnswer;
