import GameTimer from '../../../data/game-timer.js';
import showScreen from '../../show-screen.js';
import controlGame from '../../control-game.js';
import WelcomeView from './welcome-view.js';

class Welcome {
  constructor(state) {
    this.state = state;
    this.view = new WelcomeView();

    this.view.onStartButtonClick = () => {
      this.onStartGame();
    };
  }

  init() {
    showScreen(this.view.element);
  }

  onStartGame() {
    this.state.timer = new GameTimer(this.state.time);
    this.state.timer.start();
    controlGame(this.state);
  }
}

export default Welcome;
