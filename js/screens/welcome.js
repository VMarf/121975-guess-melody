import {getNode} from '../utils.js';
import {playButton} from '../main.js';

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

console.log(playButton);

export {screenWelcome};
