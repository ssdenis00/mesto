export class Section {
  #items;
  #renderer;
  #containerSelector;

  constructor({ items, renderer }, containerSelector) {
    this.#items = items;
    this.#renderer = renderer;
    this.#containerSelector = containerSelector;
  }

  rendererElement() {
    this.#items.forEach(item => {
      this.#renderer(item);
    });
  }

  addItem(elem) {
    this.#containerSelector.append(elem);
  }
}