export class Api {
  #url;
  #headers;
  constructor(options) {
    this.#url = options.url;
    this.#headers = options.headers;
  }

  #getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.#url}/users/me`, {
      method: 'GET',
      headers: this.#headers
    })
      .then(this.#getResponseData);
  }

  editUserInfo(info) {
    return fetch(`${this.#url}/users/me`, {
      method: 'PATCH',
      headers: this.#headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    })
      .then(this.#getResponseData);
  }

  getInitialCards() {
    return fetch(`${this.#url}/cards`, {
      method: 'GET',
      headers: this.#headers
    })
      .then(this.#getResponseData);
  }

  addCard(card) {
    return fetch(`${this.#url}/cards`, {
      method: 'POST',
      headers: this.#headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(this.#getResponseData);
  }

  changeAvatar(data) {
    return fetch(`${this.#url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.#headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this.#getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this.#url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.#headers
    })
      .then(this.#getResponseData);
  }

  addLike(cardId) {
    return fetch(`${this.#url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.#headers
    })
      .then(this.#getResponseData);
  }

  removeLike(cardId) {
    return fetch(`${this.#url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.#headers
    })
      .then(this.#getResponseData);
  }
}