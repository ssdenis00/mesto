import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  #submitForm;
  #formElement;
  #resetForm;
  #inputList;
  constructor(popupElement, { submitForm, resetForm }) {
    super(popupElement);
    this.#submitForm = submitForm;
    this.#resetForm = resetForm;
  }

  #handleSubmitForm(evt) {
    evt.preventDefault();
    this.#submitForm(this.#getInputValues());
  }

  #getInputValues() {
    this.#formElement = this._popupElement.querySelector('.popup__form');
    const inputData = {};

    inputData.name = document.querySelector('.popup__form-text_input_name').value;
    inputData.job = document.querySelector('.popup__form-text_input_job').value;
    inputData.title = document.querySelector('.popup__form-text_input_title').value;
    inputData.link = document.querySelector('.popup__form-text_input_img').value;

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
    this.#resetForm();
  }
}