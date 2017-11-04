import State from '../data/state.js';
import {GameSettings, initialState, currentPlayer} from '../data/game.js';
import controlGame from './control-game.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {

    // Начинаем новую игру
    initialState = new State(GameSettings.MAX_GAME_TIME);

    currentPlayer.resetToDefault();
    controlGame(initialState);
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
