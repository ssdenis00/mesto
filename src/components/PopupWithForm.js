import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  #submitForm;
  #formElement;
  #inputList;
  constructor(popupElement, { submitForm }) {
    super(popupElement);
    this.#submitForm = submitForm;
  }

  #handleSubmitForm(evt) {
    evt.preventDefault();
    this.#submitForm(this.#getInputValues());
  }

  #getInputValues() {
    this.#formElement = this._popupElement.querySelector('.popup__form');
    const inputData = {};
    this.#inputList = this.#formElement.querySelectorAll('.popup__form-text');

    this.#inputList.forEach(input => {
      inputData[input.name] = input.value;
    });

    return inputData;
  }

  setEventListeners() {
    super.setEventListeners();

    this.#formElement = this._popupElement.querySelector('.popup__form');

    this.#formElement.addEventListener('submit', (evt) => { this.#handleSubmitForm(evt) });
  }

  close() {
    super.close();
    this.#formElement.reset();
  }
}