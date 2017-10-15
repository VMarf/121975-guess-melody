import getNode from '../get-node.js';
import controlGame from '../control-game.js';
import {getStateTemplate, getPlayerWrapperTemplate} from './components.js';

// Получаем заголовок игрового экрана
const getTitleTemplate = (text) => {
  return `<h2 class="title main-title">${text}</h2>`;
};

// Получаем заполненный шаблон одного варианта ответа
const getAnswerWrapperTemplate = (answerNumber, artistName, artistImage) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r js-main-answer-r" type="radio" id="answer-${answerNumber}" name="answer" value="val-${answerNumber}"/>
            <label class="main-answer" for="answer-${answerNumber}">
              <img class="main-answer-preview" src="${artistImage}" alt="${artistName}" width="134" height="134">
              ${artistName}
            </label>
          </div>`;
};

// Получаем заполненный шаблон игрового экрана
const getScreenLevelArtistTemplate = (state, question) => {
  return `<section class="main main--level main--level-artist js-main">
            ${getStateTemplate(state)}
            <div class="main-wrap">
              ${getTitleTemplate(question.title)}
              ${getPlayerWrapperTemplate(question.songSrc)}
              <form class="main-list js-main-list">
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getAnswerWrapperTemplate(answerIndex + 1, answer.artist, answer.image), ``)}
              </form>
            </div>
          </section>`;
};

// Получаем DOM элемент на основе шаблона экрана, добавляем обработчик и возвращаем для отрисовки на странице
const getScreenLevelArtist = (state, question) => {
  const screenTemplate = getNode(getScreenLevelArtistTemplate(state, question));
  const answersList = screenTemplate.querySelector(`.js-main-list`);

  const onAnswersListClick = (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      controlGame(state);
    }
  };

  answersList.addEventListener(`click`, onAnswersListClick);

  return screenTemplate;
};

export default getScreenLevelArtist;
