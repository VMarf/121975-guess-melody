import getNode from '../get-node.js';
import {logoTemplate, replayButtonTemplate} from './components-templates.js';

const infoTemplate = `<h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

// Собираем шаблон страницы из шаблонов логических блоков
const screenResultAttemptsEndTemplate = `<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${replayButtonTemplate}
  </section>`;

// Получаем DOM элемент на основе шаблона экрана и возвращаем для отрисовки на странице
const getScreenResultAttemptsEnd = () => {
  const screenTemplate = getNode(screenResultAttemptsEndTemplate);

  return screenTemplate;
};

export default getScreenResultAttemptsEnd;
