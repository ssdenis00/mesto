class FormValidator {
  #inputErrorClass;
  #errorClass;
  #formElement;
  #inputList;
  #btnElement;

  constructor(config, formElement) {
    this.#inputErrorClass = config.inputErrorClass;
    this.#errorClass = config.errorClass;
    this.#formElement = formElement;
    this.#inputList = Array.from(this.#formElement.querySelectorAll(config.inputSelector));
    this.#btnElement = this.#formElement.querySelector(config.buttonClass);
  }

  resetForm() {
    this.#btnElement.disabled = true;
    this.#inputList.forEach(item => {
      this.#hideInputError(item);
    });
  }

  #hideInputError(inputElement) {
    const errorMessage = this.#formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this.#inputErrorClass);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this.#errorClass);
  }

  #showInputError(inputElement) {
    const errorMessage = this.#formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this.#inputErrorClass);
    errorMessage.textContent = inputElement.validationMessage;
    errorMessage.classList.add(this.#errorClass);
  }

  #checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this.#hideInputError(inputElement);
    } else {
      this.#showInputError(inputElement);
    }
  }

  #checkInputValidityState() {
    return this.#inputList.some(inputElement => !inputElement.validity.valid);
  }

  #setBtnState() {
    if (this.#checkInputValidityState()) {
      this.#btnElement.disabled = true;
    } else {
      this.#btnElement.disabled = false;
    }
  }

  #setEventListeners() {
    this.#inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this.#checkInputValidity(inputElement);
        this.#setBtnState();
      });
    });

    this.#setBtnState();
  }

  enableValidation() {
    this.#setEventListeners();
  }
}

export { FormValidator };