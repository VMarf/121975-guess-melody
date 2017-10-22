import GameTimer from '../../../data/game-timer.js';
import controlGame from '../../control-game.js';
import WelcomeView from './welcome-view.js';

const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomeView();

  screenWelcome.onStartButtonClick = () => {

    // Начинаем игру
    state.timer = new GameTimer(state.time);
    state.timer.start();
    controlGame(state);
  };

  return screenWelcome.element;
};

export default getScreenWelcome;
