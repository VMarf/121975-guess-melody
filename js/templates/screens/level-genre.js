import {initialState} from '../../data/game.js';
import getValueFromRange from '../../utils/get-value-from-range';
import getNode from '../get-node.js';
import showScreen from '../show-screen.js';
import {playerWrapperTemplate, getStateTemplate} from './components.js';
import {screenResultWin} from './result-win.js';
import {screenResultTimeOver} from './result-time-over.js';
import {screenResultAttemptsEnd} from './result-attempts-end.js';
import initReplay from '../init-replay.js';

// @TODO: Заменить на данные из game.js
const answersNumbers = [1, 2, 3, 4];

const titleTemplate = `<h2 class="title">Выберите инди-рок треки</h2>`;

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

const getGenreAnswerTemplate = (answerNumber) => {
  return `<div class="genre-answer">
            ${playerWrapperTemplate}
            <input class="js-genre-answer-input" type="checkbox" name="answer" value="answer-${answerNumber}" id="a-${answerNumber}">
            <label class="genre-answer-check" for="a-${answerNumber}"></label>
          </div>`;
};

const screenLevelGenre = getNode(`<section class="main main--level main--level-genre js-main">
    ${getStateTemplate(initialState)}
    <div class="main-wrap">
      ${titleTemplate}
      <form class="genre js-genre">
        ${answersNumbers.reduce((answers, answerNumber) => answers + getGenreAnswerTemplate(answerNumber), ``)}
        ${answerSendButtonTemplate}
      </form>
    </div>
  </section>`);

const initScreenLevelGenre = () => {
  const genreForm = document.querySelector(`.js-genre`);
  const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
  const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

  const onGenreFormChange = (evt) => {
    if (evt.target.closest(`.js-genre-answer-input`)) {
      sendButton.disabled = !genreAnswersInputs.some((genreAnswerInput) => genreAnswerInput.checked);
    }
  };

  const onSendButtonClick = (evt) => {
    const randomNumber = getValueFromRange(1, 3);

    evt.preventDefault();

    switch (randomNumber) {
      case 1:
        showScreen(screenResultWin);
        initReplay();
        break;
      case 2:
        showScreen(screenResultTimeOver);
        initReplay();
        break;
      case 3:
        showScreen(screenResultAttemptsEnd);
        initReplay();
        break;
    }
  };

  genreForm.addEventListener(`change`, onGenreFormChange);

  sendButton.addEventListener(`click`, onSendButtonClick);
};

export {screenLevelGenre, initScreenLevelGenre};
