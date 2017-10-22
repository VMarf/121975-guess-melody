import FailResultView from './fail-result-view.js';

const getScreenFailResult = (state) => {
  const screenFailResult = new FailResultView(state);

  return screenFailResult.element;
};

export default getScreenFailResult;
