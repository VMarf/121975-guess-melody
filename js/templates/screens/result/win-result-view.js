import getPlayerScore from '../../../data/get-player-score.js';
import getPlayerResult from '../../../data/get-player-result.js';
import convertSecondsToMinutes from '../../../utils/convert-seconds-to-minutes.js';
import AbstractResultView from './abstract-result-view.js';

class WinResultView extends AbstractResultView {
  constructor(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) {
    super();
    this.maxQuickAnswerTime = maxQuickAnswerTime;
    this.state = state;
    this.currentPlayer = currentPlayer;
    this.resultsOtherPlayers = resultsOtherPlayers;
  }

  getInfoTemplate() {
    const spentTime = convertSecondsToMinutes(this.currentPlayer.spentTime);

    this.currentPlayer.score = getPlayerScore(this.currentPlayer.answers, this.currentPlayer.remainingNotes);

    return `<h2 class="title">Вы настоящий меломан!</h2>
            <div class="main-stat">
              За ${spentTime.minutes} минуты и ${spentTime.seconds} секунд
              <br>
              вы набрали ${this.currentPlayer.score} баллов 
              (${this.currentPlayer.answers.filter((answer) => answer.time < this.maxQuickAnswerTime).length} быстрых)
              <br>
              совершив ${this.state.mistakes} ошибки
            </div>
            <span class="main-comparison">${getPlayerResult(this.resultsOtherPlayers, this.currentPlayer)}</span>`;
  }
}

export default WinResultView;
