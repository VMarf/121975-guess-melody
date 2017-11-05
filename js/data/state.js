import Player from './player.js';

class State {
  constructor(maxGameTime) {
    this.time = maxGameTime;
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
    this.currentPlayer = new Player();
  }
}

export default State;
