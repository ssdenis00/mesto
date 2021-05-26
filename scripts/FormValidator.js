class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._buttonClass = config.buttonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  resetForm() {
    this._btnElement.disabled = true;
    this._inputList.forEach(item => {
      this._hideInputError(item);
    });
  }

  _hideInputError(inputElement) {
    const _errorMessage = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    _errorMessage.textContent = '';
    _errorMessage.classList.remove(this._errorClass);
  }

  _showInputError(inputElement) {
    const _errorMessage = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    _errorMessage.textContent = inputElement.validationMessage;
    _errorMessage.classList.add(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _checkInputValidityState() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }

  _setBtnState() {
    if (this._checkInputValidityState()) {
      this._btnElement.disabled = true;
    } else {
      this._btnElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._btnElement = this._formElement.querySelector(this._buttonClass);

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._setBtnState();
      });
    });

    this._setBtnState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export { FormValidator };