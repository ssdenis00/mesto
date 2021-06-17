export class UserInfo {
  #nameSelector;
  #jobSelector;
  #userData = {};

  constructor({ nameSelector, jobSelector }) {
    this.#nameSelector = nameSelector;
    this.#jobSelector = jobSelector;
  }

  getUserInfo() {
    this.#userData = {
      name: this.#nameSelector.textContent,
      job: this.#jobSelector.textContent
    }

    return this.#userData;
  }

  setUserInfo() {
    const formEditProfile = document.querySelector('.popup__form_type_edit');
    const jobInput = formEditProfile.querySelector('.popup__form-text_input_job');
    const nameInput = formEditProfile.querySelector('.popup__form-text_input_name');

    this.#nameSelector.textContent = nameInput.value;
    this.#jobSelector.textContent = jobInput.value;
  }
}