import {GameSettings, currentPlayer, playersStats} from '../../../data/game.js';
import showScreen from '../../show-screen.js';
import initReplay from '../../init-replay.js';
import WinResultView from './win-result-view.js';

class WinResult {
  constructor(state) {
    this.state = state;
    this.state.currentPlayerInfo = {
      score: currentPlayer.score,
      remainingTime: currentPlayer.remainingTime,
      remainingNotes: currentPlayer.remainingNotes,
      answers: currentPlayer.answers,
      spentTime: currentPlayer.spentTime
    };
    this.view = new WinResultView(GameSettings.MAX_QUICK_ANSWER_TIME, this.state.mistakes, currentPlayer, playersStats);
  }

  init() {
    console.log(this.state.currentPlayerInfo);
    showScreen(this.view.element);
    initReplay();
  }
}

export default WinResult;
