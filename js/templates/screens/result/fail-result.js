import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import FailResultView from './fail-result-view.js';

class FailResult {
  constructor(state) {
    this.state = state;
    this.view = new FailResultView(this.state);
  }

  init() {
    showScreen(this.view.element);
    initReplay(this.view.getReplay());
  }
}

export default FailResult;
