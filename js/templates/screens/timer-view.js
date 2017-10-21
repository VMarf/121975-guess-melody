import {GameSettings} from '../../data/game.js';
import convertSecondsToMinutes from '../../utils/convert-seconds-to-minutes.js';

class TimerView {
  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
              <circle
                cx="390" cy="390" r="370"
                class="timer-line"
                style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
              </circle>

              <div class="timer-value js-timer-value" xmlns="http://www.w3.org/1999/xhtml">
                <span class="timer-value-mins js-timer-value-mins"></span><!--
                --><span class="timer-value-dots js-timer-value-dots">:</span><!--
                --><span class="timer-value-secs js-timer-value-secs"></span>
              </div>
            </svg>`;
  }

  updateTime(seconds) {
    const newTime = convertSecondsToMinutes(seconds);

    document.querySelector(`.js-timer-value-mins`).innerText = newTime.minutes;
    document.querySelector(`.js-timer-value-secs`).innerText = newTime.seconds;

    if (seconds <= GameSettings.MIN_TIMER_DANGER_ZONE) {
      document.querySelector(`.js-timer-value`).classList.add(`timer-value--time-danger`);
    }
  }
}

export default TimerView;
