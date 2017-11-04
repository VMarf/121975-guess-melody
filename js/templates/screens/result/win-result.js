import Loader from '../../../data/loader.js';
import getPlayerResult from '../../../data/get-player-result.js';
import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import WinResultView from './win-result-view.js';

const getOtherPlayersResults = (loadedResults) => {
  const otherPlayers = loadedResults.slice(1, loadedResults.length - 1);

  return otherPlayers.map((item) => {
    return item.currentPlayer.score;
  });
};

class WinResult {
  async init() {
    try {
      const loadedResults = await Loader.loadResults();
      const otherPlayersResults = getOtherPlayersResults(loadedResults);
      const state = loadedResults[loadedResults.length - 1];
      const playerResult = getPlayerResult(otherPlayersResults, state.currentPlayer);
      const view = new WinResultView(state, playerResult);

      showScreen(view.element);
      initReplay(view.getReplay());

    } catch (e) {
      Loader.onError(e.message);
    }
  }
}

export default WinResult;
