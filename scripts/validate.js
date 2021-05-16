const hideInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorMessage.textContent = '';
  errorMessage.classList.remove(errorClass);
}

const showInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorMessage.textContent = inputElement.validationMessage;
  errorMessage.classList.add(errorClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

const checkInputValidityState = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const setBtnState = (btnElement, inputList) => {
  if (checkInputValidityState(inputList)) {
    btnElement.disabled = true;
  } else {
    btnElement.disabled = false;
  }
}

const setEventListeners = (formElement, config) => {
  const { inputSelector, ButtonClass, ...restConfig } = config;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const btnElement = formElement.querySelector(ButtonClass);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, restConfig);
      setBtnState(btnElement, inputList);
    });
  });

  setBtnState(btnElement, inputList);
}

const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(formElement => {
    setEventListeners(formElement, restConfig);
  });
}
