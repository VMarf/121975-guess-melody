import {GameSettings, questions} from '../data/game.js';
import Application from './screens/application.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question) => {
  if (question.type === `artist`) {
    Application.showLevelArtist(state);
    return;
  }

  if (question.type === `genre`) {
    Application.showLevelGenre(state);
  }
};

const controlGame = (state) => {

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    Application.showFailResult(state);
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    checkQuestionType(state, questions[state.level]);
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    Application.showWinResult(state);
  }
};

export default controlGame;
