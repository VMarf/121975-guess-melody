import checkAnswer from '../../../data/check-answer.js';
import controlGame from '../../control-game.js';
import LevelGenreView from './level-genre-view.js';

const getScreenLevelGenre = (state, question, currentPlayer) => {
  const screenLevelGenre = new LevelGenreView(state, question);

  // Управление вопсроизведением трека при клике на кнопку play
  screenLevelGenre.onGenreFormClick = (evt, playButtons) => {
    if (evt.target.closest(`.js-song-play`)) {
      const currentPlayButton = evt.target;
      const otherPlayButtons = playButtons.slice().filter((playButton) => playButton !== currentPlayButton);

      evt.preventDefault();

      otherPlayButtons.forEach((playButton) => {
        playButton.classList.remove(`player-control--pause`);
        playButton.previousElementSibling.pause();
      });

      currentPlayButton.classList.toggle(`player-control--pause`);

      if (currentPlayButton.classList.contains(`player-control--pause`)) {
        currentPlayButton.previousElementSibling.play();
        return;
      }

      currentPlayButton.previousElementSibling.pause();
    }
  };

  // Если выбран один из вариантов ответа или несколько, то кнопка отправки ответа становится доступной
  screenLevelGenre.onGenreFormChange = (evt, checkboxes, button) => {
    if (evt.target.closest(`.js-genre-answer-input`)) {
      button.disabled = !checkboxes.some((checkbox) => checkbox.checked);
    }
  };

  // По клику на кнопку отправки ответа, получаем value всех выбранных чекбоксов, записываем их в ответ и с помощью controlGame получаем следующий экран
  screenLevelGenre.onSendButtonClick = (evt, form) => {
    const genreAnswersCheckedInputs = Array.from(form.querySelectorAll(`.js-genre-answer-input:checked`));
    const answers = genreAnswersCheckedInputs.map((checkedInput) => checkedInput.value);

    evt.preventDefault();
    checkAnswer(state, question, answers, currentPlayer);
    controlGame(state);
  };

  return screenLevelGenre.element;
};

export default getScreenLevelGenre;
