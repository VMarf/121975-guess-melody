import {initialState, currentPlayer} from '../data/game.js';
import controlGame from './control-game.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {

    // Начинаем новую игру
    initialState.resetToDefault();
    currentPlayer.resetToDefault();
    controlGame(initialState);
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
