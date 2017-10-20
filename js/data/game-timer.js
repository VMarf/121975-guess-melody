import Timer from '../utils/timer.js';

// Создаем таймер
const createGameTimer = (state, maxGameTime) => {
  state.timer = new Timer(maxGameTime);
};

// Запускаем таймер
const startGameTimer = (state, minTimerDangerZone) => {
  return setInterval(() => {

    // Когда осталось менее 30 секунд таймер должен начать мигать красным цветом
    if (state.timer.seconds < minTimerDangerZone) {}

    state.timer.tick();
  }, 1000);
};

export {createGameTimer, startGameTimer};
