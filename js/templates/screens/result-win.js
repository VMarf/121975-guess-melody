import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components.js';

const infoTemplate = `<h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За 3 минуты и 25 секунд
      <br>вы набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</span>`;

const screenResultWin = getNode(`<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${replayButtonTemplate}
  </section>`);

export {screenResultWin};
