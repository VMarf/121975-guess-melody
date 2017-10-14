import {initialState, currentPlayer, playersStats} from '../../data/game.js';
import getPlayerResult from '../../data/get-player-result.js';
import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components.js';

// @TODO: Все экраны с результатом одинаковы, разница только в содержимом infoTemplate, можно для всех видов экранов с результатом сделать 1 шаблон
// @TODO: С магическим числом 30 надо что-то делать, в модуле get-player-score есть константа MAX_QUICK_ANSWER_TIME, её можно вынести в data/game.js
const infoTemplate = `<h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">
      За 3 минуты и 25 секунд
      <br>
      вы набрали ${currentPlayer.score} баллов 
      (${currentPlayer.answers.filter((answer) => answer.time < 30).length} быстрых)
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
