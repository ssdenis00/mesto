export class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
  }

  open() {
    this.popupSelector.classList.add('popup_visible-on');
    document.addEventListener('keydown', this.#handleEscClose);
  }

  close() {
    this.popupSelector.classList.remove('popup_visible-on');
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
    const buttonClose = this.popupSelector.querySelector('.popup__cross');

    buttonClose.addEventListener('click', () => { this.close() });
    this.popupSelector.addEventListener('click', (evt) => { this.#closeOverlay(evt) });
  }
};