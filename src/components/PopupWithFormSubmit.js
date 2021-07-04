import { Popup } from './Popup.js';

export class PopupWithFormSubmit extends Popup {
  #submitForm;
  #formElement;
  #element;

  constructor(popupElement, { submitForm }) {
    super(popupElement);
    this.#submitForm = submitForm;
  }

  open(card) {
    super.open();
    this.#element = card;
  }

  setImgId() {
    return this.#element.querySelector('.galary__img').id;
  }

  setEventListeners() {
    super.setEventListeners();

    this.#formElement = this._popupElement.querySelector('.popup__form');

    this.#formElement.addEventListener('submit', this.#submitForm);
  }

  removeCard() {
    this.#element.remove();
    this.#element = null;
  }
}