import AbstractView from '../../../abstract-view.js';
import {logoTemplate} from '../components.js';

const playButtonTemplate = `<button class="main-play js-main-play">Начать игру</button>`;

const infoTemplate = `
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты — за 5 минут ответить на все вопросы.<br>
  Ошибиться можно 3 раза.<br>
  Удачи!
</p>`.trim();

// Собираем шаблон страницы из шаблонов логических блоков
const screenWelcomeTemplate = `
<section class="main main--welcome js-main">
  ${logoTemplate}
  ${playButtonTemplate}
  ${infoTemplate}
</section>`.trim();

class WelcomeView extends AbstractView {
  get template() {
    return screenWelcomeTemplate;
  }

  bind() {
    const playButton = this._element.querySelector(`.js-main-play`);

    playButton.addEventListener(`click`, this.onPlayButtonClick);
  }

  onPlayButtonClick() {}
}

export default WelcomeView;
