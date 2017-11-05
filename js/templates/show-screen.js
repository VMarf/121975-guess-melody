const app = document.querySelector(`.js-app`);

const getOldScreen = () => {
  return app.querySelector(`.js-main`);
};

const showScreen = (screen) => {
  const oldScreen = getOldScreen();

  app.replaceChild(screen, oldScreen);
};

export default showScreen;
