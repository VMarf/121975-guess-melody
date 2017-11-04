import Application from '../../../application.js';
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

    if (this.view) {
      if (!Application.isSongsLoaded) {
        Application.onSongsLoaded = () => {
          this.view.activatePlayButton();
        };
      }
    }
  }

  onStartGame() {
    controlGame(this.state);
  }
}

export default Welcome;
