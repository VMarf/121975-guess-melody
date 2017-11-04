import Timer from '../utils/timer.js';

class GameTimer {
  constructor(seconds) {
    this._timer = new Timer(seconds);
    this._timerInterval = null;
    this._seconds = seconds;
  }

  start() {
    this._timerInterval = setInterval(() => {
      this._seconds = this._timer.tick();

      if (this._seconds === 0) {
        this.stop();
      }

      this.onTick(this._seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this._timerInterval);
  }

  onTick() {}
}

export default GameTimer;
