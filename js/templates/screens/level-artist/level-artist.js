import checkAnswer from '../../../data/check-answer.js';
import controlGame from '../../control-game.js';
import LevelArtistView from './level-artist-view.js';

const getScreenLevelArtist = (state, question, currentPlayer) => {
  const screenLevelArtist = new LevelArtistView(state.mistakes, question);

  // Сюда записываем сколько секунд потратил игрок на ответ
  let answerTimerValue = 0;

  const answerTimer = setInterval(() => answerTimerValue++, 1000);

  state.timer.onTick = (seconds) => {
    screenLevelArtist.updateTime(seconds);
  };

  // Останавливаем таймер ответа и отправляем ответ
  // controlGame определит, какой экран показывать дальше
  screenLevelArtist.onAnswersListClick = (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      const answer = evt.target.closest(`.js-main-answer-r`).value;

      clearInterval(answerTimer);
      checkAnswer(state, question, answer, answerTimerValue, currentPlayer);
      controlGame(state);
    }
  };

  return screenLevelArtist.element;
};

export default getScreenLevelArtist;
