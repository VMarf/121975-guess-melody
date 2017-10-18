import AbstractView from '../../../abstract-view.js';
import {logoTemplate, replayButtonTemplate} from '../components-templates.js';

const getScreenResult = () => {
  return `<section class="main main--result js-main">
            ${logoTemplate}
            ${getInfoTemplate()}
            ${replayButtonTemplate}
          </section>`;
};

class AbstractResultView extends AbstractView {
  get template() {
    return getScreenResult();
  }

  getInfoTemplate() {
    throw new Error(`Abstract method called`);
  }
}

export default AbstractResultView;
