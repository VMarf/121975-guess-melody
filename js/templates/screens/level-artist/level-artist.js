import checkAnswer from '../../../data/check-answer.js';
import controlGame from '../../control-game.js';
import LevelArtistView from './level-artist-view.js';

const getScreenLevelArtist = (state, question, currentPlayer) => {
  const screenLevelArtist = new LevelArtistView(state, question);

  screenLevelArtist.onAnswersListClick = (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      const answer = evt.target.closest(`.js-main-answer-r`).value;

      checkAnswer(state, question, answer, currentPlayer);
      controlGame(state);
    }
  };

  return screenLevelArtist.element;
};

export default getScreenLevelArtist;
