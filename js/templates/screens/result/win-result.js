import Loader from '../../../data/loader.js';
import {playersStats} from '../../../data/game.js';
import getPlayerResult from '../../../data/get-player-result.js';
import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import WinResultView from './win-result-view.js';

class WinResult {
  init() {
    Loader.loadResults().then((loadedResults) => {
      const state = loadedResults[loadedResults.length - 1];
      const playerResult = getPlayerResult(playersStats, state.currentPlayer);
      const view = new WinResultView(state, playerResult);

      showScreen(view.element);
      initReplay();
    });
  }
}

export default WinResult;
