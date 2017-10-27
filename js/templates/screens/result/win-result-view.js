import {WordsVariants} from '../../../data/game.js';
import convertSecondsToMinutes from '../../../utils/convert-seconds-to-minutes.js';
import declineWord from '../../../utils/decline-word.js';
import AbstractResultView from './abstract-result-view.js';

class WinResultView extends AbstractResultView {
  constructor(state) {
    super();
    this.state = state;
    this.currentPlayer = this.state.currentPlayer;
  }

  getInfoTemplate() {
    const spentTime = convertSecondsToMinutes(this.currentPlayer.spentTime);

    return `<h2 class="title">Вы настоящий меломан!</h2>
            <div class="main-stat">
              За
              ${spentTime.minutes} ${declineWord(Math.trunc(this.currentPlayer.spentTime / 60), WordsVariants.MINUTES)} 
              и 
              ${spentTime.seconds} ${declineWord(this.currentPlayer.spentTime % 60, WordsVariants.SECONDS)}
              <br>
              вы набрали ${this.currentPlayer.score} ${declineWord(this.currentPlayer.score, WordsVariants.SCORE)} 
              (${this.currentPlayer.numberQuickAnswers} ${declineWord(this.currentPlayer.numberQuickAnswers, WordsVariants.FAST)})
              <br>
              совершив ${this.state.mistakes} ${declineWord(this.state.mistakes, WordsVariants.MISTAKES)}
            </div>
            <span class="main-comparison">${this.currentPlayer.result}</span>`;
  }
}

export default WinResultView;
