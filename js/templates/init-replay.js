import showScreen from './show-screen.js';
import getScreen from './screens/welcome.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplayClick = () => {
    showScreen(getScreen());
  };

  replay.addEventListener(`click`, onReplayClick);
};

export default initReplay;
