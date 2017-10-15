import getNode from '../get-node.js';
import controlGame from '../control-game.js';
import {getStateTemplate, getPlayerWrapperTemplate} from './components.js';

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

// Получаем заголовок игрового экрана
const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

// Получаем заполненный шаблон одного варианта ответа
const getGenreAnswerTemplate = (answerNumber, songSrc) => {
  return `<div class="genre-answer">
            ${getPlayerWrapperTemplate(songSrc)}
            <input class="js-genre-answer-input" type="checkbox" name="answer" value="answer-${answerNumber}" id="a-${answerNumber}">
            <label class="genre-answer-check" for="a-${answerNumber}"></label>
          </div>`;
};

// Получаем заполненный шаблон игрового экрана
const getScreenLevelGenreTemplate = (state, question) => {
  return `<section class="main main--level main--level-genre js-main">
            ${getStateTemplate(state)}
            <div class="main-wrap">
              ${getTitleTemplate(question.title)}
               <form class="genre js-genre">
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getGenreAnswerTemplate(answerIndex + 1, answer.src), ``)}
                ${answerSendButtonTemplate}
               </form>
            </div>
          </section>`;
};

// Получаем DOM элемент на основе шаблона экрана, добавляем обработчики и возвращаем для отрисовки на странице
const getScreenLevelGenre = (state, question) => {
  const screenTemplate = getNode(getScreenLevelGenreTemplate(state, question));
  const genreForm = screenTemplate.querySelector(`.js-genre`);
  const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
  const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

  const onGenreFormChange = (evt) => {
    if (evt.target.closest(`.js-genre-answer-input`)) {
      sendButton.disabled = !genreAnswersInputs.some((genreAnswerInput) => genreAnswerInput.checked);
    }
  };

  const onSendButtonClick = (evt) => {
    evt.preventDefault();
    controlGame(state);
  };

  genreForm.addEventListener(`change`, onGenreFormChange);

  sendButton.addEventListener(`click`, onSendButtonClick);

  return screenTemplate;
};

export default getScreenLevelGenre;
