import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import WinResultView from './win-result-view.js';

class WinResult {
  constructor(state) {
    this.state = state;
    this.view = new WinResultView(this.state);
  }

  init() {
    showScreen(this.view.element);
    initReplay();
  }
}

export default WinResult;
