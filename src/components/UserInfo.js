export class UserInfo {
  #nameSelector;
  #aboutSelector;
  #avatarSelector;

  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this.#nameSelector = nameSelector;
    this.#aboutSelector = aboutSelector;
    this.#avatarSelector = avatarSelector;
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
    this.#nameSelector.id = inputData._id;
  }

  setAvatar(src) {
    this.#avatarSelector.src = src;
  }
}