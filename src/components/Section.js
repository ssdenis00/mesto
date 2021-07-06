export class Section {
  #renderer;
  #containerSelector;

  constructor({ renderer }, containerSelector) {
    this.#renderer = renderer;
    this.#containerSelector = containerSelector;
  }

  rendererElement(items, id) {
    for (let i = items.length - 1; i >= 0; --i) {
      this.#renderer(items[i], id);
    }
  }

  addItem(elem) {
    this.#containerSelector.prepend(elem);
  }
}