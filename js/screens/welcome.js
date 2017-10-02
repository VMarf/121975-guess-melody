import {getNode, showScreen} from '../utils.js';
import {screenLevelArtist, initScreenLevelArtist} from './level-artist.js';

const screenWelcome = getNode(`<section class="main main--welcome js-main">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play js-main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
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
