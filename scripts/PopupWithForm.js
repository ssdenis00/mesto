import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.#submitForm = submitForm;
  }

  #handleSubmitForm() {

  }

  #resetForm() {

  }

  #getInputValues() {
    this.#formElement = this.#popupSelector.querySelector('.popup__form');
    this.#inputList = Array.from(this._formElement.querySelectorAll('.popup__form-text'));
    const inputData = {};

    return this.#inputList.value;
  }

  setEventListeners() {
    super.setEventListeners();
    this.#formElement.addEventListener('submit', this.#handleSubmitForm);
  }

  close() {
    super.close();
    this.#resetForm();
  }
}