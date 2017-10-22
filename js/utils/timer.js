class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  tick() {
    if (this.seconds <= 0) {
      return -1;
    }

    return --this.seconds;
  }
}

export default Timer;
