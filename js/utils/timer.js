class Timer {
  constructor(seconds) {
    this._seconds = seconds;
  }

  tick() {
    if (this._seconds <= 0) {
      return -1;
    }

    return --this._seconds;
  }
}

export default Timer;
