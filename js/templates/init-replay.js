import showScreen from './show-screen.js';
import getScreenWelcome from './screens/welcome.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {
    showScreen(getScreenWelcome());
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
