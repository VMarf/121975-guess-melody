import getNode from '../get-node.js';
import showScreen from '../show-screen.js';
import {logoTemplate} from './components.js';
import {screenLevelArtist, initScreenLevelArtist} from './level-artist.js';

const playButtonTemplate = `<button class="main-play js-main-play">Начать игру</button>`;

const infoTemplate = `<h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты — за 5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>`;

const screenWelcome = getNode(`<section class="main main--welcome js-main">
    ${logoTemplate}
    ${playButtonTemplate}
    ${infoTemplate}
  </section>`);

const initScreenWelcome = () => {
  const playButton = document.querySelector(`.js-main-play`);

  const onPlayButtonClick = () => {
    showScreen(screenLevelArtist);
    initScreenLevelArtist();
  };

  playButton.addEventListener(`click`, onPlayButtonClick);
};

export {screenWelcome, initScreenWelcome};
