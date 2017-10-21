import {GameSettings, questions, currentPlayer, playersStats} from '../data/game.js';
import showScreen from './show-screen.js';
import initReplay from './init-replay.js';
import getScreenLevelArtist from './screens/level-artist/level-artist.js';
import getScreenLevelGenre from './screens/level-genre/level-genre.js';
import getScreenWinResult from './screens/result/win-result.js';
import getScreenFailResult from './screens/result/fail-result.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question, player) => {
  if (question.type === `artist`) {
    showScreen(getScreenLevelArtist(state, question, player));
    return;
  }

  if (question.type === `genre`) {
    showScreen(getScreenLevelGenre(state, question, player));
  }
};

const controlGame = (state) => {

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    showScreen(getScreenFailResult(state));
    initReplay();
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    checkQuestionType(state, questions[state.level], currentPlayer);
    state.level++;
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    showScreen(getScreenWinResult(GameSettings.MAX_QUICK_ANSWER_TIME, state.mistakes, currentPlayer, playersStats));
    initReplay();
  }
};

export default controlGame;
