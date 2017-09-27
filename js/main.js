(function () {
  const ALT_KEYCODE = 18;
  const ARROW_RIGHT_KEYCODE = 39;
  const ARROW_LEFT_KEYCODE = 37;

  const app = document.querySelector(`.app`);
  const templates = document.querySelector(`#templates`).content;
  const screenWelcome = templates.querySelector(`.main--welcome`);
  const screenLevelGenre = templates.querySelector(`.main--level-genre`);
  const screenLevelArtist = templates.querySelector(`.main--level-artist`);
  const screenWin = templates.querySelector(`.main--result-win`);
  const screenTimeOver = templates.querySelector(`.main--result-time-over`);
  const screenAttemptsEnd = templates.querySelector(`.main--result-attempts-end`);
  const screens = [screenWelcome, screenLevelGenre, screenLevelArtist, screenWin, screenTimeOver, screenAttemptsEnd];

  let oldScreen;
  let newScreen;
  let currentScreenIndex;

  const showScreen = (screenNumber) => {
    oldScreen = app.querySelector(`.main`);
    newScreen = screens[screenNumber];
    currentScreenIndex = screens.indexOf(newScreen);

    app.replaceChild(newScreen, oldScreen);
  };

  const onDocumentArrowPress = (evt) => {
    if (evt.keyCode === ARROW_RIGHT_KEYCODE) {
      if (currentScreenIndex < screens.length - 1) {
        showScreen(currentScreenIndex + 1);
      }
    }

    if (evt.keyCode === ARROW_LEFT_KEYCODE) {
      if (currentScreenIndex > 0) {
        showScreen(currentScreenIndex - 1);
      }
    }
  };

  const onDocumentKeyDown = (evt) => {
    if (evt.keyCode === ALT_KEYCODE) {
      document.addEventListener(`keydown`, onDocumentArrowPress);
    }
  };

  const onDocumentKeyUp = (evt) => {
    if (evt.keyCode === ALT_KEYCODE) {
      document.removeEventListener(`keydown`, onDocumentArrowPress);
    }
  };

  showScreen(0);

  document.addEventListener(`keydown`, onDocumentKeyDown);

  document.addEventListener(`keyup`, onDocumentKeyUp);
})();
