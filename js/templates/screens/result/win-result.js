import {GameSettings, currentPlayer, playersStats} from '../../../data/game.js';
import showScreen from '../../show-screen.js';
import WinResultView from './win-result-view.js';

class WinResult {
  constructor(state) {
    this.state = state;
    this.view = new WinResultView(GameSettings.MAX_QUICK_ANSWER_TIME, this.state, currentPlayer, playersStats);
  }

  init() {
    showScreen(this.view.element);
  }
}

export default WinResult;
