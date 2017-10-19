import getPlayerScore from '../../data/get-player-score.js';
import getPlayerResult from '../../data/get-player-fail-result.js';
import convertSecondsToMinutes from '../../utils/convert-seconds-to-minutes.js';
import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components-templates.js';

const getInfoTemplate = (maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers) => {
  currentPlayer.score = getPlayerScore(currentPlayer.answers, currentPlayer.remainingNotes);

  return `<h2 class="title">Вы настоящий меломан!</h2>
          <div class="main-stat">
            За ${spentTime.minutes} минуты и ${spentTime.seconds} секунд
            <br>
            вы набрали ${currentPlayer.score} баллов 
            (${currentPlayer.answers.filter((answer) => answer.time < maxQuickAnswerTime).length} быстрых)
            <br>
            совершив ${state.mistakes} ошибки
          </div>
          <span class="main-comparison">${getPlayerResult(resultsOtherPlayers, currentPlayer)}</span>`;
};

// Получаем заполненный шаблон экрана с результатом игрока
const getScreenResultWinTemplate = (maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers) => {
  return `<section class="main main--result js-main">
            ${logoTemplate}
            ${getInfoTemplate(maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers)}
            ${replayButtonTemplate}
          </section>`;
};

// Получаем DOM элемент на основе шаблона экрана и возвращаем для отрисовки на странице
const getScreenResultWin = (maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) => {
  const spentTime = convertSecondsToMinutes(currentPlayer.spentTime);
  const screenTemplate = getNode(getScreenResultWinTemplate(maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers));

  return screenTemplate;
};

export default getScreenResultWin;
