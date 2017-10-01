import {showScreen} from './utils.js';
import {screenWelcome} from './screens/welcome.js';

const getPlayButton = () => document.querySelector(`.js-main-play`);

showScreen(screenWelcome);

const playButton = getPlayButton();

export {playButton};


