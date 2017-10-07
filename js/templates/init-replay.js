import showScreen from './show-screen.js';
import {screenWelcome, initScreenWelcome} from './screens/welcome.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {
    showScreen(screenWelcome);
    initScreenWelcome();
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
