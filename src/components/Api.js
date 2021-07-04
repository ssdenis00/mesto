export class Api {
  #url;
  #headers;
  constructor(options) {
    this.#url = options.url;
    this.#headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.#url}/users/me`, {
      method: 'GET',
      headers: this.#headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => { console.log(err) });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getInitialCards() {
    return fetch(`${this.#url}/cards`, {
      method: 'GET',
      headers: this.#headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeAvatar(data) {
    return fetch(`${this.#url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.#headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.#url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.#headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

}