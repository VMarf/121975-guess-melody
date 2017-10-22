import checkAnswer from '../../../data/check-answer.js';
import controlGame from '../../control-game.js';
import LevelGenreView from './level-genre-view.js';

const getScreenLevelGenre = (state, question, currentPlayer) => {
  const screenLevelGenre = new LevelGenreView(state.mistakes, question);

  // Сюда записываем сколько секунд потратил игрок на ответ
  let answerTimerValue = 0;

  const answerTimer = setInterval(() => answerTimerValue++, 1000);

  state.timer.onTick = (seconds) => {
    screenLevelGenre.updateTime(seconds);
  };

  // Останавливаем таймер ответа и отправляем ответ
  // controlGame определит, какой экран показывать дальше
  screenLevelGenre.onSendAnswer = (answer) => {
    clearInterval(answerTimer);
    checkAnswer(state, question, answer, answerTimerValue, currentPlayer);
    controlGame(state);
  };

  return screenLevelGenre.element;
};

export default getScreenLevelGenre;
