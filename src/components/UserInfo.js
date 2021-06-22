export class UserInfo {
  #nameSelector;
  #jobSelector;

  constructor({ nameSelector, jobSelector }) {
    this.#nameSelector = nameSelector;
    this.#jobSelector = jobSelector;
  }

  getUserInfo() {
    const userData = {
      name: this.#nameSelector.textContent,
      job: this.#jobSelector.textContent
    }

    return userData;
  }

  setUserInfo(inputData) {
    this.#nameSelector.textContent = inputData.name;
    this.#jobSelector.textContent = inputData.job;
  }
}