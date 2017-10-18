import AbstractView from '../../../abstract-view.js';
import {getStateTemplate, getPlayerWrapperTemplate} from '../components-templates.js';

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

// Получаем заголовок игрового экрана
const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

// Получаем заполненный шаблон одного варианта ответа
const getGenreAnswerTemplate = (answerNumber, songName, songSrc) => {
  return `<div class="genre-answer">
            ${getPlayerWrapperTemplate(songSrc)}
            <input class="js-genre-answer-input" type="checkbox" name="answer" value="${songName}" id="a-${answerNumber}">
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
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getGenreAnswerTemplate(answerIndex + 1, answer.name, answer.src), ``)}
                ${answerSendButtonTemplate}
               </form>
            </div>
          </section>`;
};

class LevelGenreView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this.question = question;
  }

  get template() {
    return getScreenLevelGenreTemplate(this.state, this.question);
  }

  bind() {
    const genreForm = this._element.querySelector(`.js-genre`);
    const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
    const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

    genreForm.addEventListener(`change`, (evt) => this.onGenreFormChange(evt, genreAnswersInputs, sendButton));

    sendButton.addEventListener(`click`, (evt) => this.onSendButtonClick(evt, genreForm));
  }

  onGenreFormChange() {}
  onSendButtonClick() {}
}

export default LevelGenreView;
