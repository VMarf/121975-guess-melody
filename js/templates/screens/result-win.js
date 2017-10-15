import {GameSettings, initialState, currentPlayer, playersStats} from '../../data/game.js';
import convertSecondsToMinutes from '../../utils/convert-seconds-to-minutes.js';
import getPlayerResult from '../../data/get-player-result.js';
import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components.js';

const spentTime = convertSecondsToMinutes(currentPlayer.spentTime);

// @TODO: Все экраны с результатом одинаковы, разница только в содержимом infoTemplate, можно для всех видов экранов с результатом сделать 1 шаблон
const infoTemplate = `<h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">
      За ${spentTime.minutes} минуты и ${spentTime.seconds} секунд
      <br>
      вы набрали ${currentPlayer.score} баллов 
      (${currentPlayer.answers.filter((answer) => answer.time < GameSettings.MAX_QUICK_ANSWER_TIME).length} быстрых)
      <br>
      совершив ${initialState.mistakes} ошибки
    </div>
    <span class="main-comparison">${getPlayerResult(playersStats, currentPlayer)}</span>`;

const screenResultWin = getNode(`<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${replayButtonTemplate}
  </section>`);

export {screenResultWin};
