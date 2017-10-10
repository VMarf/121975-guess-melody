const app = document.querySelector(`.js-app`);

let oldScreen;
let newScreen;

const showScreen = (screen) => {
  oldScreen = app.querySelector(`.js-main`);
  newScreen = screen.cloneNode(true);

  app.replaceChild(newScreen, oldScreen);
};

export default showScreen;
