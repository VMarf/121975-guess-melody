'use strict';

(function () {
  const ARROW_RIGHT_KEYCODE = 39;
  const ARROW_LEFT_KEYCODE = 37;

  const app = document.querySelector(`.js-app`);
  const templates = document.querySelector(`.js-templates`).content;
  const screensSelectors = [`.js-main--welcome`, `.js-main--level-genre`, `.js-main--level-artist`, `.js-main--result-win`, `.js-main--result-time-over`, `.js-main--result-attempts-end`];

  let oldScreen;
  let newScreen;
  let currentScreenIndex;

  const getScreens = () => {
    return screensSelectors.map((screensSelector) => templates.querySelector(screensSelector));
  };

  const showScreen = (screenNumber) => {
    oldScreen = app.querySelector(`.js-main`);
    newScreen = screens[screenNumber];
    currentScreenIndex = screens.indexOf(newScreen);

    app.replaceChild(newScreen, oldScreen);
  };

  const onDocumentKeyPress = (evt) => {
    if (evt.altKey && evt.keyCode === ARROW_RIGHT_KEYCODE) {
      if (currentScreenIndex < screens.length - 1) {
        showScreen(currentScreenIndex + 1);
      }
    }

    if (evt.altKey && evt.keyCode === ARROW_LEFT_KEYCODE) {
      if (currentScreenIndex > 0) {
        showScreen(currentScreenIndex - 1);
      }
    }
  };

  const screens = getScreens();

  showScreen(0);

  document.addEventListener(`keydown`, onDocumentKeyPress);
})();
