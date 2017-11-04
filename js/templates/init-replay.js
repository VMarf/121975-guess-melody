import {GameSettings, currentPlayer} from '../data/game.js';
import State from '../data/state.js';
import controlGame from './control-game.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {

    // Начинаем новую игру
    currentPlayer.resetToDefault();
    controlGame(new State(GameSettings.MAX_GAME_TIME));
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
