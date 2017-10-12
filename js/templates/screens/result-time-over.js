import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components.js';

const infoTemplate = `<h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

const screenResultTimeOver = getNode(`<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${replayButtonTemplate}
  </section>`);

export {screenResultTimeOver};
