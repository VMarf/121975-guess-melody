import controlGame from '../../control-game.js';
import WelcomeView from './welcome-view.js';

const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomeView();

  screenWelcome.onPlayButtonClick = () => {
    controlGame(state);
  };

  return screenWelcome.element;
};

export default getScreenWelcome;
