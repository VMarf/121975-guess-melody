import checkAnswer from '../../../data/check-answer.js';
import showScreen from '../../show-screen.js';
import controlGame from '../../control-game.js';
import LevelGenreView from './level-genre-view.js';

class LevelGenre {
  constructor(state, question, currentPlayer) {
    this.state = state;
    this.question = question;
    this.currentPlayer = currentPlayer;
    this.view = new LevelGenreView(this.state.mistakes, this.question);
    this.answerTimerValue = 0;
    this.answerTimer = null;

    this.view.onSendAnswer = (answer) => {
      this.state.timerStrokeDashoffset = document.querySelector(`.js-timer-line`).style.strokeDashoffset;

      clearInterval(this.answerTimer);
      checkAnswer(this.state, this.question, answer, this.answerTimerValue, this.currentPlayer);
      controlGame(this.state);
    };
  }

  init() {
    this.answerTimer = setInterval(() => this.answerTimerValue++, 1000);

    this.state.timer.onTick = (seconds) => {
      this.view.updateTime(seconds);
    };

    showScreen(this.view.element);
  }
}

export default LevelGenre;
