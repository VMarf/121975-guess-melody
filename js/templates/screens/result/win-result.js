import {GameSettings, currentPlayer, playersStats} from '../../../data/game.js';
import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import WinResultView from './win-result-view.js';

class WinResult {
  constructor(state) {
    this.state = state;
    this.view = new WinResultView(GameSettings.MAX_QUICK_ANSWER_TIME, this.state.mistakes, this.state.currentPlayerInfo, this.playersStats);
  }

  init() {
    showScreen(this.view.element);
    initReplay();
  }
}

export default WinResult;
