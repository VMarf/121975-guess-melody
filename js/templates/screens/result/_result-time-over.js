import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components-templates.js';

const infoTemplate = `<h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

// Собираем шаблон страницы из шаблонов логических блоков
const screenResultTimeOverTemplate = `<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${replayButtonTemplate}
  </section>`;

// Получаем DOM элемент на основе шаблона экрана и возвращаем для отрисовки на странице
const getScreenResultTimeOver = () => {
  const screenTemplate = getNode(screenResultTimeOverTemplate);

  return screenTemplate;
};

export default getScreenResultTimeOver;
