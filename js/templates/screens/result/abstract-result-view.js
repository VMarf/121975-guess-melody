import AbstractView from '../../../abstract-view.js';
import {logoTemplate, replayButtonTemplate} from '../components-templates.js';

class AbstractResultView extends AbstractView {
  get template() {
    return `<section class="main main--result js-main">
              ${logoTemplate}
              ${this.getInfoTemplate()}
              ${replayButtonTemplate}
            </section>`;
  }

  getInfoTemplate() {
    throw new Error(`Abstract method called`);
  }
}

export default AbstractResultView;
