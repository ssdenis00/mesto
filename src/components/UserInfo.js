export class UserInfo {
  #nameSelector;
  #aboutSelector;

  constructor({ nameSelector, aboutSelector }) {
    this.#nameSelector = nameSelector;
    this.#aboutSelector = aboutSelector;
  }

  getUserInfo() {
    const userData = {
      name: this.#nameSelector.textContent,
      about: this.#aboutSelector.textContent
    }

    return userData;
  }

  setUserInfo(inputData) {
    this.#nameSelector.textContent = inputData.name;
    this.#aboutSelector.textContent = inputData.about;
  }

  setUserAvatar(data) {

  }
}