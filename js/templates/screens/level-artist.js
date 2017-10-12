import getNode from '../get-node.js';
import showScreen from '../show-screen.js';
import {timerTemplate, notesTemplate, playerWrapperTemplate} from './components.js';
import {screenLevelGenre, initScreenLevelGenre} from './level-genre.js';

const answersInfo = [
  {
    singerName: `Пелагея`,
    singerPhoto: `http://placehold.it/134x134`
  },
  {
    singerName: `Краснознаменная дивизия имени моей бабушки`,
    singerPhoto: `http://placehold.it/134x134`
  },
  {
    singerName: `Lorde`,
    singerPhoto: `http://placehold.it/134x134`
  }
];

const titleTemplate = `<h2 class="title main-title">Кто исполняет эту песню?</h2>`;

const getAnswerWrapperTemplate = (answerNumber, singerName, singerPhoto) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r js-main-answer-r" type="radio" id="answer-${answerNumber}" name="answer" value="val-${answerNumber}"/>
            <label class="main-answer" for="answer-${answerNumber}">
              <img class="main-answer-preview" src="${singerPhoto}" alt="${singerName}" width="134" height="134">
              ${singerName}
            </label>
          </div>`;
};

const screenLevelArtist = getNode(`<section class="main main--level main--level-artist js-main">
    ${timerTemplate}
    ${notesTemplate}
    <div class="main-wrap">
      ${titleTemplate}
      ${playerWrapperTemplate}
      <form class="main-list js-main-list">
        ${answersInfo.reduce((answers, answerInfo, answerInfoIndex) => answers + getAnswerWrapperTemplate(answerInfoIndex + 1, answerInfo.singerName, answerInfo.singerPhoto), ``)}
      </form>
    </div>
  </section>`);

const initScreenLevelArtist = () => {
  const answersList = document.querySelector(`.js-main-list`);

  const onAnswersListClick = (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      showScreen(screenLevelGenre);
      initScreenLevelGenre();
    }
  };

  answersList.addEventListener(`click`, onAnswersListClick);
};

export {screenLevelArtist, initScreenLevelArtist};
