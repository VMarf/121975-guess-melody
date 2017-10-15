import getNode from '../get-node.js';
import controlGame from '../control-game.js';
import {logoTemplate} from './components.js';

const playButtonTemplate = `<button class="main-play js-main-play">Начать игру</button>`;

const infoTemplate = `<h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты — за 5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>`;

// Собираем шаблон страницы из шаблонов логических блоков
const screenWelcomeTemplate = `<section class="main main--welcome js-main">
    ${logoTemplate}
    ${playButtonTemplate}
    ${infoTemplate}
  </section>`;

// Получаем DOM элемент на основе шаблона экрана, добавляем обработчик и возвращаем для отрисовки на странице
const getScreenWelcome = (state) => {
  const screenTemplate = getNode(screenWelcomeTemplate);
  const playButton = screenTemplate.querySelector(`.js-main-play`);

  const onPlayButtonClick = () => {
    controlGame(state);
  };

  playButton.addEventListener(`click`, onPlayButtonClick);

  return screenTemplate;
};

export default getScreenWelcome;
