import { formEditProfile, formAddCard } from './index.js';

class FormValidator {
  constructor(config, formElement) {
    this.inputSelector = config.inputSelector;
    this.submitButtonSelector = config.submitButtonSelector;
    this.buttonClass = config.buttonClass;
    this.inputErrorClass = config.inputErrorClass;
    this.errorClass = config.errorClass;
    this.formElement = formElement;
  }

  resetForm(popup) {
    const inputList = Array.from(popup.querySelectorAll(this.inputSelector));
    const submit = popup.querySelector(this.buttonClass);

    submit.disabled = true;
    inputList.forEach(item => {
      this._hideInputError(this.formElement, item);
    });
  }

  _hideInputError(formElement, inputElement) {
    const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this.inputErrorClass);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this.errorClass);
  }

  _showInputError(formElement, inputElement) {
    const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this.inputErrorClass);
    errorMessage.textContent = inputElement.validationMessage;
    errorMessage.classList.add(this.errorClass);
  }

  _checkInputValidity(formElement, inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement);
    } else {
      this._showInputError(formElement, inputElement);
    }
  }

  _checkInputValidityState(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }

  _setBtnState(btnElement, inputList) {
    if (this._checkInputValidityState(inputList)) {
      btnElement.disabled = true;
    } else {
      btnElement.disabled = false;
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    const btnElement = this.formElement.querySelector(this.buttonClass);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this.formElement, inputElement);
        this._setBtnState(btnElement, inputList);
      });
    });

    this._setBtnState(btnElement, inputList);
  }

  enableValidation() {
    this._setEventListeners(this.formElement);
  }
}

export { FormValidator };