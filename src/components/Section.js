export class Section {
  #items;
  #renderer;
  #containerSelector;

  constructor({ renderer }, containerSelector) {
    this.#renderer = renderer;
    this.#containerSelector = containerSelector;
  }

  rendererElement(items) {
    for (let i = items.length - 1; i >= 0; --i) {
      this.#renderer(items[i]);
    }
  }

  addItem(elem) {
    this.#containerSelector.prepend(elem);
  }
}