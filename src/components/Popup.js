export class Popup {
  #btn;
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

  open() {
    this._popupElement.classList.add('popup_visible-on');
    document.addEventListener('keydown', this.#handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_visible-on');
    document.removeEventListener('keydown', this.#handleEscClose);
  }

  #handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  #closeOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    const buttonClose = this._popupElement.querySelector('.popup__cross');

    buttonClose.addEventListener('click', () => { this.close() });
    this._popupElement.addEventListener('click', (evt) => { this.#closeOverlay(evt) });
  }

  renderLoading(value, textReturn) {
    this.#btn = this._popupElement.querySelector('.popup__btn');
    if (value) {
      this.#btn.textContent = 'Сохранение...';
    } else {
      this.#btn.textContent = textReturn;
    }
  }
};