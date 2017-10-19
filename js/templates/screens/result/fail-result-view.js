import AbstractResultView from './abstract-result-view.js';

const infoTemplate = `<h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

const infoTemplate = `<h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

class FailResultView extends AbstractResultView {
  getInfoTemplate() {
    return infoTemplate;
  }
}

export default FailResultView;
