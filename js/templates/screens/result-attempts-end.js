import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components.js';

const infoTemplate = `<h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

const screenResultAttemptsEnd = getNode(`<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${replayButtonTemplate}
  </section>`);

export {screenResultAttemptsEnd};
