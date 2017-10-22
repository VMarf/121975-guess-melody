import WinResultView from './win-result-view.js';

const getScreenWinResult = (maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) => {
  const screenWinResult = new WinResultView(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers);

  return screenWinResult.element;
};

export default getScreenWinResult;
