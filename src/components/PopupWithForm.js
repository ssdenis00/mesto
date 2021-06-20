import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  #submitForm;
  #formElement;
  #resetForm;
  #inputList;
  constructor(popupSelector, { submitForm, resetForm }) {
    super(popupSelector);
    this.#submitForm = submitForm;
    this.#resetForm = resetForm;
  }

  #handleSubmitForm(evt) {
    evt.preventDefault();
    this.#submitForm(this.#getInputValues());
  }

  #getInputValues() {
    this.#formElement = this.popupSelector.querySelector('.popup__form');
    const inputArr = [];
    this.#inputList = Array.from(this.#formElement.querySelectorAll('.popup__form-text'));

    this.#inputList.forEach(input => {
      inputArr.push(input.value);
    });

    return inputArr;
  }

  setEventListeners() {
    super.setEventListeners();

    this.#formElement = this.popupSelector.querySelector('.popup__form');

    this.#formElement.addEventListener('submit', (evt) => { this.#handleSubmitForm(evt) });
  }

  close() {
    super.close();
    this.#formElement.reset();
    this.#resetForm();
  }
}