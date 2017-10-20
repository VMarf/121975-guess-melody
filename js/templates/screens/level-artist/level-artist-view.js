import AbstractView from '../../../abstract-view.js';
import {getStateTemplate, getPlayerWrapperTemplate} from '../components-templates.js';

// Получаем заголовок игрового экрана
const getTitleTemplate = (text) => {
  return `<h2 class="title main-title">${text}</h2>`;
};

// Получаем заполненный шаблон одного варианта ответа
const getAnswerWrapperTemplate = (answerNumber, artistName, artistImage) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r js-main-answer-r" type="radio" id="answer-${answerNumber}" name="answer" value="${artistName}"/>
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
              ${getPlayerWrapperTemplate(question.type, question.songSrc)}
              <form class="main-list js-main-list">
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getAnswerWrapperTemplate(answerIndex + 1, answer.artist, answer.image), ``)}
              </form>
            </div>
          </section>`;
};

class LevelArtistView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this.question = question;
  }

  get template() {
    return getScreenLevelArtistTemplate(this.state, this.question);
  }

  bind() {
    const playButton = this._element.querySelector(`.js-song-play`);
    const answersList = this._element.querySelector(`.js-main-list`);

    playButton.addEventListener(`click`, () => this.onPlayButtonClick(playButton));

    answersList.addEventListener(`click`, this.onAnswersListClick);
  }

  onPlayButtonClick() {}
  onAnswersListClick() {}
}

export default LevelArtistView;
