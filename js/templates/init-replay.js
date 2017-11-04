import {GameSettings, currentPlayer} from '../data/game.js';
import State from '../data/state.js';
import controlGame from './control-game.js';

const initReplay = (replay) => {
  const onReplayClick = () => {
    currentPlayer.resetToDefault();
    controlGame(new State(GameSettings.MAX_GAME_TIME));
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
