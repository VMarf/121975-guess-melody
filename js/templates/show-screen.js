const app = document.querySelector(`.js-app`);

let oldScreen;
let newScreen;

const showScreen = (screen) => {
  oldScreen = app.querySelector(`.js-main`);
  newScreen = screen;

  app.replaceChild(newScreen.cloneNode(true), oldScreen);
};

export default showScreen;
