import {initialState, currentPlayer} from '../data/game.js';
import GameTimer from '../data/game-timer.js';
import controlGame from './control-game.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  initialState.timer.stop();

  const onReplayClick = () => {
    initialState.resetToDefault();
    currentPlayer.resetToDefault();

    // Начинаем новую игру
    initialState.timer = new GameTimer(initialState.time);
    initialState.timer.start();
    controlGame(initialState);
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
