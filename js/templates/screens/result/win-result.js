import Loader from '../../../data/loader.js';
import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import WinResultView from './win-result-view.js';

class WinResult {
  init() {
    Loader.loadResults().then((loadedResults) => {
      const state = loadedResults[loadedResults.length - 1];
      const view = new WinResultView(state);

      showScreen(view.element);
      initReplay();
    });
  }
}

export default WinResult;
