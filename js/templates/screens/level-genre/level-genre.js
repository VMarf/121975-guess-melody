import checkAnswer from '../../../data/check-answer.js';
import controlGame from '../../control-game.js';
import LevelGenreView from './level-genre-view.js';

const getScreenLevelGenre = (state, question, currentPlayer) => {
  const screenLevelGenre = new LevelGenreView(state, question);
  const genreForm = screenLevelGenre.element.querySelector(`.js-genre`);
  const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
  const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

  // Если выбран один из вариантов ответа или несколько, то кнопка отправки ответа становится доступной
  screenLevelGenre.onGenreFormChange = (evt) => {
    if (evt.target.closest(`.js-genre-answer-input`)) {
      sendButton.disabled = !genreAnswersInputs.some((genreAnswerInput) => genreAnswerInput.checked);
    }
  };

  // По клику на кнопку отправки ответа, получаем value всех выбранных чекбоксов, записываем их в ответ и с помощью controlGame получаем следующий экран
  screenLevelGenre.onSendButtonClick = (evt) => {
    const genreAnswersCheckedInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input:checked`));
    const answers = genreAnswersCheckedInputs.map((checkedInput) => checkedInput.value);

    evt.preventDefault();
    checkAnswer(state, question, answers, currentPlayer);
    controlGame(state);
  };

  return screenLevelGenre.element;
};

export default getScreenLevelGenre;
