import AbstractView from '../../../abstract-view.js';
import TimerView from '../timer-view.js';
import {getMistakesTemplate, getPlayerWrapperTemplate} from '../components-templates.js';

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

// Получаем заголовок игрового экрана
const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

// Получаем заполненный шаблон одного варианта ответа
const getGenreAnswerTemplate = (answerNumber, songName, questionType, songSrc) => {
  return `<div class="genre-answer">
            ${getPlayerWrapperTemplate(questionType, songSrc)}
            <input class="js-genre-answer-input" type="checkbox" name="answer" value="${songName}" id="a-${answerNumber}">
            <label class="genre-answer-check" for="a-${answerNumber}"></label>
          </div>`;
};

// Получаем заполненный шаблон игрового экрана
const getScreenLevelGenreTemplate = (mistakesNumber, question) => {
  return `<section class="main main--level main--level-genre js-main">
            ${new TimerView().template}
            ${getMistakesTemplate(mistakesNumber)}
            <div class="main-wrap">
              ${getTitleTemplate(question.title)}
               <form class="genre js-genre">
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getGenreAnswerTemplate(answerIndex + 1, answer.name, question.type, answer.src), ``)}
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
    return getScreenLevelGenreTemplate(this.state.mistakes, this.question);
  }

  bind() {
    const timerView = new TimerView();
    const genreForm = this._element.querySelector(`.js-genre`);
    const genrePlayButtons = Array.from(genreForm.querySelectorAll(`.js-song-play`));
    const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
    const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

    this.state.timer.onTick = (seconds) => {
      timerView.updateTime(seconds);
    };

    genreForm.addEventListener(`click`, (evt) => this.onGenreFormClick(evt, genrePlayButtons));

    genreForm.addEventListener(`change`, (evt) => this.onGenreFormChange(evt, genreAnswersInputs, sendButton));

    sendButton.addEventListener(`click`, (evt) => this.onSendButtonClick(evt, genreForm));
  }

  onGenreFormClick() {}
  onGenreFormChange() {}
  onSendButtonClick() {}
}

export default LevelGenreView;
