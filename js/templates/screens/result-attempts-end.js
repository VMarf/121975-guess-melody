import getNode from '../get-node.js';

const screenResultAttemptsEnd = getNode(`<section class="main main--result js-main">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay js-main-replay">Попробовать ещё раз</span>
  </section>`);

export {screenResultAttemptsEnd};
