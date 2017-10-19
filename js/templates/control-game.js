import {GameSettings, questions, currentPlayer, playersStats} from '../data/game.js';
import {createGameTimer, startGameTimer} from '../data/game-timer.js';
import showScreen from './show-screen.js';
import initReplay from './init-replay.js';
import getScreenLevelArtist from './screens/level-artist/level-artist.js';
import getScreenLevelGenre from './screens/level-genre/level-genre.js';
import getScreenWinResult from './screens/result/win-result.js';
import getScreenFailResult from './screens/result/fail-result.js';

let gameTimer;

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

  // Проверяем запущен ли игровой таймер, если нет, то запускаем
  // Срабатывает перед показом первого уровня каждой отдельной игры
  // Располагается тут, чтобы при завершении игры таймер можно было почистить через clearInterval
  if (state.timer === null) {
    createGameTimer(state, GameSettings.MAX_GAME_TIME);
    gameTimer = startGameTimer(state, GameSettings.MIN_TIMER_DANGER_ZONE);
  }

  // Если кончилось время или игрок совершил максимально возможное количество ошибок
  if (state.time === 0 || state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    clearInterval(gameTimer);
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
    clearInterval(gameTimer);
    showScreen(getScreenWinResult(GameSettings.MAX_QUICK_ANSWER_TIME, state, currentPlayer, playersStats));
    initReplay();
  }
};

export default controlGame;
