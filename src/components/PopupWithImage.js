import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(cardElement) {
    super.open();
    this.#setImgData(cardElement);
  }

  #setImgData(cardElement) {
    const imageGalary = cardElement.querySelector('.galary__img');
    const description = imageGalary.offsetParent.querySelector('.galary__title');
    const imagePopup = this._popupElement.querySelector('.popup__img');
    const descriptionElement = this._popupElement.querySelector('.popup__description');

    imagePopup.src = imageGalary.src;
    imagePopup.alt = 'фото ' + description.textContent;
    descriptionElement.textContent = description.textContent;
  }
}