class State {
  constructor(maxGameTime) {
    this.time = maxGameTime;
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
  }
}

export default State;
