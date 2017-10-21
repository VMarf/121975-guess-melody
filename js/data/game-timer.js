import Timer from '../utils/timer.js';

class GameTimer {
  constructor(seconds) {
    this.timer = new Timer(seconds);
    this.timerInterval = null;
    this.seconds = seconds;
  }

  get value() {
    return this.seconds;
  }

  start() {
    this.timerInterval = setInterval(() => {
      this.seconds = this.timer.tick();

      if (this.seconds === 0) {
        this.stop();
      }

      this.onTick(this.seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  onTick() {}
}

export default GameTimer;
