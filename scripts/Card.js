import { openPopup, imgPopup } from './index.js';

class Card {
  constructor(cardData, templateSelector) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._template = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.galary__item')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle('galary__like_active');
  }

  _handleTrashButton(evt) {
    evt.target.closest('.galary__item').remove();
  }

  _handleOpenPopupImg(evt) {
    evt.preventDefault();
    const eventTarget = evt.target;
    const description = eventTarget.offsetParent.querySelector('.galary__title');
    const image = document.querySelector('.popup__img');
    const descriptionElement = document.querySelector('.popup__description');
    openPopup(imgPopup);
    image.src = eventTarget.src;
    image.alt = 'фото ' + description.textContent;
    descriptionElement.textContent = description.textContent;
  }

  generateCard() {
    this._element = this._getTemplate();
    const _title = this._element.querySelector('.galary__title');
    const _image = this._element.querySelector('.galary__img');
    const _like = this._element.querySelector('.galary__like');
    const _trash = this._element.querySelector('.galary__delete-item');
    const _imageLink = this._element.querySelector('.galary__link-img');

    _title.textContent = this._name;
    _image.src = this._link;
    _image.alt = 'фото ' + this._name;
    _like.addEventListener('click', this._handleLikeButton);
    _trash.addEventListener('click', this._handleTrashButton);
    _imageLink.addEventListener('click', this._handleOpenPopupImg);

    return this._element;
  }
}

export { Card };