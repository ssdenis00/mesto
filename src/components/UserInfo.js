export class UserInfo {
  #nameSelector;
  #jobSelector;
  #jobInput;
  #nameInput;
  #formEditProfile

  constructor({ nameSelector, jobSelector }) {
    this.#nameSelector = nameSelector;
    this.#jobSelector = jobSelector;
  }

  getUserInfo() {
    this.#formEditProfile = document.querySelector('.popup__form_type_edit');
    this.#jobInput = this.#formEditProfile.querySelector('.popup__form-text_input_job');
    this.#nameInput = this.#formEditProfile.querySelector('.popup__form-text_input_name');

    this.#nameInput.value = this.#nameSelector.textContent;
    this.#jobInput.value = this.#jobSelector.textContent;
  }

  setUserInfo(inputArr) {
    this.#nameSelector.textContent = inputArr[0];
    this.#jobSelector.textContent = inputArr[1];
  }
}