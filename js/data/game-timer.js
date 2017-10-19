import Timer from '../utils/timer.js';
import convertSecondsToMinutes from '../utils/convert-seconds-to-minutes.js';

const screenTimer = document.querySelector('.js-timer-value');
const screenTimerMinutes = screenTimer.querySelector('.js-timer-value-mins');
const screenTimerDots = screenTimer.querySelector('.js-timer-value-dots');
const screenTimerSeconds = screenTimer.querySelector('.js-timer-value-secs');

let newTime;

// Создаем таймер
const createGameTimer = (state, maxGameTime) => {
  state.timer = new Timer(maxGameTime);
};

// Обновляем значения в верстке таймера
const updateScreenTimer = (seconds) => {
  newTime = convertSecondsToMinutes(seconds);

  screenTimerMinutes.textContent = newTime.minutes;
  screenTimerSeconds.textContent = newTime.seconds;
};

// Запускаем таймер
const startGameTimer = (state, minTimerDangerZone) => {
  return setInterval(() => {

    // Когда осталось менее 30 секунд таймер должен начать мигать красным цветом
    if (state.timer.seconds < minTimerDangerZone) {

    }

    state.timer.tick();
    updateScreenTimer(state.timer.seconds);
  }, 1000);
};

export {createGameTimer, startGameTimer};
