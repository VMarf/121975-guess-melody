import getNode from './templates/get-node.js';

class AbstractView {
  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return getNode(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }
}

export default AbstractView;
