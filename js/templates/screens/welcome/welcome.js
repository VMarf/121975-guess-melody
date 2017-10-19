import Timer from '../../../utils/timer.js';
import controlGame from '../../control-game.js';
import WelcomeView from './welcome-view.js';

const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomeView();

  screenWelcome.onPlayButtonClick = () => {

    // Создаем таймер
    state.timer = new Timer(300);

    // Запускаем таймер
    const gameTimer = setInterval(() => {
      state.timer.tick();
    }, 1000);

    // Начинаем игру
    controlGame(state);
  };

  return screenWelcome.element;
};

export default getScreenWelcome;
