import Loader from './data/loader.js';
import {QuestionTypes} from './data/game.js';
import adaptQuestions from './data/adapt-questions.js';
import GameTimer from './data/game-timer.js';
import Welcome from './templates/screens/welcome/welcome.js';
import LevelArtist from './templates/screens/level-artist/level-artist.js';
import LevelGenre from './templates/screens/level-genre/level-genre.js';
import WinResult from './templates/screens/result/win-result.js';
import FailResult from './templates/screens/result/fail-result.js';

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
  return window.btoa(encodeURIComponent(JSON.stringify(state)));
};

const loadState = (dataString) => {
  return JSON.parse(decodeURIComponent(window.atob(dataString)));
};

const checkGameTimer = (state) => {
  if (state.level === 0) {
    state.timer = new GameTimer(state.time);
    state.timer.start();
  }
};

class Application {
  constructor() {
    this._questions = [];
  }

  static async init(state) {
    try {
      const loadedData = await this.loadData();

      this.addHashListener();
      this.start(state, loadedData);

    } catch (e) {
      Loader.onError(e.message);
    }
  }

  static addHashListener() {
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

  static async loadData() {
    const loadedData = await Loader.loadData();

    return adaptQuestions(loadedData);
  }

  static async preloadSongs(questions) {
    const promises = [];

    questions.forEach((question) => {
      if (question.type === QuestionTypes.ARTIST) {
        promises.push(fetch(question.songSrc));
        return;
      }

      question.answerList.forEach((answer) => {
        promises.push(fetch(answer));
      });
    });

    try {
      await Promise.all(promises);
      document.querySelector(`.js-main-start`).disabled = false;

    } catch (e) {
      Loader.onError(e.message);
    }
  }

  static getLevelQuestion(levelNumber) {
    return this._questions[levelNumber];
  }

  static start(state, loadedData) {
    this._questions = loadedData;

    this.preloadSongs(this._questions);
    this.showWelcome(state);
  }

  static showWelcome(state) {
    location.hash = `${ControllerId.WELCOME}?${saveState(state)}`;
  }

  static showLevelArtist(state) {
    checkGameTimer(state);
    new LevelArtist(state).init();
  }

  static showLevelGenre(state) {
    checkGameTimer(state);
    new LevelGenre(state).init();
  }

  static async showWinResult(state) {
    state.timer.stop();
    await Loader.saveResults(state);
    location.hash = `${ControllerId.WIN_RESULT}?${saveState(null)}`;
  }

  static showFailResult(state) {
    state.timer.stop();
    location.hash = `${ControllerId.FAIL_RESULT}?${saveState(state)}`;
  }
}

export default Application;
