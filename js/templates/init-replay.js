import {GameSettings} from '../data/game.js';
import State from '../data/state.js';
import controlGame from './control-game.js';

const initReplay = (replay) => {
  const onReplayClick = () => {
    controlGame(new State(GameSettings.MAX_GAME_TIME));
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
