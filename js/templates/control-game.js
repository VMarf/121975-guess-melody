import {GameSettings, QuestionType} from '../data/game.js';
import getPlayerScore from '../data/get-player-score.js';
import Application from '../application.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const showLevel = (state, question) => {
  if (question.type === QuestionType.ARTIST) {
    Application.showLevelArtist(state);
    return;
  }

  if (question.type === QuestionType.GENRE) {
    Application.showLevelGenre(state);
  }
};

const fillFinalState = (state) => {
  const numberQuickAnswers = state.currentPlayer.answers
      .filter((answer) => answer.time < GameSettings.MAX_QUICK_ANSWER_TIME)
      .length;

  state.currentPlayer.remainingTime = state.time;
  state.currentPlayer.remainingNotes = GameSettings.MAX_COUNT_NOTES - state.mistakes;
  state.currentPlayer.numberQuickAnswers = numberQuickAnswers;
  state.currentPlayer.spentTime = GameSettings.MAX_GAME_TIME - state.currentPlayer.remainingTime;
  state.currentPlayer.score = getPlayerScore(state.currentPlayer.answers, state.currentPlayer.remainingNotes);

  return state;
};

const controlGame = (state) => {

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    Application.showFailResult(state);
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    showLevel(state, Application.getLevelQuestion(state.level));
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    const finalState = fillFinalState(state);

    Application.showWinResult(finalState);
  }
};

export default controlGame;
