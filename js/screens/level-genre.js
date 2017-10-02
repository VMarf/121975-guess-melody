import {getValueFromRange, getNode, showScreen} from '../utils.js';
import {screenResultWin} from './result-win.js';
import {screenResultTimeOver} from './result-time-over.js';
import {screenResultAttemptsEnd} from './result-attempts-end.js';
import initReplay from './init-replay.js';

const screenLevelGenre = getNode(`<section class="main main--level main--level-genre js-main">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
    </div>

    <div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input class="js-genre-answer-input" type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check js-genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input class="js-genre-answer-input" type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check js-genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input class="js-genre-answer-input" type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check js-genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input class="js-genre-answer-input" type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check js-genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`);

const initScreenLevelGenre = () => {
  const genreAnswersInputs = Array.from(document.querySelectorAll(`.js-genre-answer-input`));
  const genreAnswers = Array.from(document.querySelectorAll(`.js-genre-answer-check`));
  const sendButton = document.querySelector(`.js-genre-answer-send`);

  const onGenreAnswerClick = () => {
    sendButton.disabled = genreAnswersInputs.some((genreAnswerInput) => genreAnswerInput.checked);
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

  genreAnswers.forEach((genreAnswer) => {
    genreAnswer.addEventListener(`click`, onGenreAnswerClick);
  });

  sendButton.addEventListener(`click`, onSendButtonClick);
};

export {screenLevelGenre, initScreenLevelGenre};
