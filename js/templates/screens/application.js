import Welcome from './welcome/welcome.js';
import LevelArtist from './level-artist/level-artist.js';
import LevelGenre from './level-genre/level-genre.js';
import WinResult from './result/win-result.js';
import FailResult from './result/fail-result.js';

const ControllerId = {
  WELCOME: `welcome`,
  LEVEL_ARTIST: `levelArtist`,
  LEVEL_GENRE: `levelGenre`,
  WIN_RESULT: `winResult`,
  FAIL_RESULT: `failResult`
};

const routes = {
  [ControllerId.WELCOME]: Welcome,
  [ControllerId.LEVEL_ARTIST]: LevelArtist,
  [ControllerId.LEVEL_GENRE]: LevelGenre,
  [ControllerId.WIN_RESULT]: WinResult,
  [ControllerId.FAIL_RESULT]: FailResult
};

const saveState = (state) => {
  return window.btoa(JSON.stringify(state));
};

const loadState = (dataString) => {
  return JSON.parse(window.atob(dataString));
};

class Application {
  static init() {
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };

    window.addEventListener(`hashchange`, onHashChange);
    onHashChange();
  }

  static changeHash(id, data) {
    const Controller = routes[id];

    if (Controller) {
      new Controller(loadState(data)).init();
    }
  }

  static showWelcome(state) {
    new Welcome(state).init();
    // location.hash = `${ControllerId.WELCOME}?${saveState(state)}`;
  }

  static showLevelArtist(state, question, currentPlayer) {
    new LevelArtist(state, question, currentPlayer).init();
    // location.hash = `${ControllerId.LEVEL_ARTIST}?${saveState({state, question, currentPlayer})}`;
  }

  static showLevelGenre(state, question, currentPlayer) {
    new LevelGenre(state, question, currentPlayer).init();
    // location.hash = `${ControllerId.LEVEL_GENRE}?${saveState({state, question, currentPlayer})}`;
  }

  static showWinResult(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) {
    new WinResult(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers).init();
    // location.hash = `${ControllerId.WIN_RESULT}?${saveState({maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers})}`;
  }

  static showFailResult(state) {
    new FailResult(state).init();
  }
}

Application.init();

export default Application;
