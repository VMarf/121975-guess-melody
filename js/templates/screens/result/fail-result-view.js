import AbstractResultView from './abstract-result-view.js';

class FailResultView extends AbstractResultView {
  constructor(state) {
    super();
    this._time = state.time;
  }

  getInfoTemplate() {

    // Если кончилось время, то возвращаем информацию об этом
    if (this._time === 0) {
      return `<h2 class="title">Увы и ах!</h2>
              <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;
    }

    // Если проигрыш не из-за времени, значит из-за количества ошибок
    return `<h2 class="title">Какая жалость!</h2>
            <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;
  }
}

export default FailResultView;
