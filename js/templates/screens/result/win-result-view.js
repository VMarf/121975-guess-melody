import {WordsVariants} from '../../../data/game.js';
import getPlayerScore from '../../../data/get-player-score.js';
import getPlayerResult from '../../../data/get-player-result.js';
import convertSecondsToMinutes from '../../../utils/convert-seconds-to-minutes.js';
import declineWord from '../../../utils/decline-word.js';
import AbstractResultView from './abstract-result-view.js';

class WinResultView extends AbstractResultView {
  constructor(maxQuickAnswerTime, mistakesNumber, currentPlayer, resultsOtherPlayers) {
    super();
    this.maxQuickAnswerTime = maxQuickAnswerTime;
    this.mistakesNumber = mistakesNumber;
    this.currentPlayer = currentPlayer;
    this.resultsOtherPlayers = resultsOtherPlayers;
  }

  getInfoTemplate() {
    const spentTime = convertSecondsToMinutes(this.currentPlayer.spentTime);
    const numberQuickAnswers = this.currentPlayer.answers.filter((answer) => answer.time < this.maxQuickAnswerTime).length;

    this.currentPlayer.score = getPlayerScore(this.currentPlayer.answers, this.currentPlayer.remainingNotes);

    return `<h2 class="title">Вы настоящий меломан!</h2>
            <div class="main-stat">
              За
              ${spentTime.minutes} ${declineWord(Math.trunc(this.currentPlayer.spentTime / 60), WordsVariants.MINUTES)} 
              и 
              ${spentTime.seconds} ${declineWord(this.currentPlayer.spentTime % 60, WordsVariants.SECONDS)}
              <br>
              вы набрали ${this.currentPlayer.score} ${declineWord(this.currentPlayer.score, WordsVariants.SCORE)} 
              (${numberQuickAnswers} ${declineWord(numberQuickAnswers, WordsVariants.FAST)})
              <br>
              совершив ${this.mistakesNumber} ${declineWord(this.mistakesNumber, WordsVariants.MISTAKES)}
            </div>
            <span class="main-comparison">${getPlayerResult(this.resultsOtherPlayers, this.currentPlayer)}</span>`;
  }
}

export default WinResultView;
