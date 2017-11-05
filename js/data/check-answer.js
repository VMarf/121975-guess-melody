import {QuestionType} from './game.js';
import PlayerAnswer from './player-answer.js';

// Проверяем ответ для игровых экранов с жанром
const checkGenreAnswer = (answer, correctAnswer) => {
  if (answer.length !== correctAnswer.length) {
    return false;
  }

  return answer.every((answerItem) => correctAnswer.includes(answerItem));
};

// Добавляем ответ к остальным ответам игрока
const addPlayerAnswer = (state, isAnswerCorrect, answerTime) => {

  // Если ответ неправильный, увеличиваем количество ошибок
  if (!isAnswerCorrect) {
    state.mistakes++;
  }

  state.currentPlayer.answers.push(new PlayerAnswer(isAnswerCorrect, answerTime));
};

const checkAnswer = (state, question, answer, answerTime) => {
  let isAnswerCorrect;

  if (question.type === QuestionType.ARTIST) {
    isAnswerCorrect = answer === question.correctAnswer;
  }

  if (question.type === QuestionType.GENRE) {
    isAnswerCorrect = checkGenreAnswer(answer, question.correctAnswer);
  }

  addPlayerAnswer(state, isAnswerCorrect, answerTime);
};

export default checkAnswer;
