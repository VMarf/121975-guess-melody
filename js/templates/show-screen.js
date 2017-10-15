const app = document.querySelector(`.js-app`);

let oldScreen;

const showScreen = (screen) => {
  oldScreen = app.querySelector(`.js-main`);

  app.replaceChild(screen, oldScreen);
};

export default showScreen;
