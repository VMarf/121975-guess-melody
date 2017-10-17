import {initialState, currentPlayer} from '../data/game.js';
import showScreen from './show-screen.js';
import getScreenWelcome from './screens/welcome/welcome.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {
    initialState.resetToDefault();
    currentPlayer.resetToDefault();
    showScreen(getScreenWelcome(initialState));
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
