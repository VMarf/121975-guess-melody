import {showScreen} from '../utils.js';
import {screenWelcome, initScreenWelcome} from './welcome.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {
    showScreen(screenWelcome);
    initScreenWelcome();
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
