export class Card {
  #handleCardClick;

  constructor(cardData, templateSelector, { handleCardClick }) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._template = templateSelector;
    this.#handleCardClick = handleCardClick;
  }

  /* #handleOpenPopupImg(evt) {
    const _imageGalary = this._element.querySelector('.galary__img');
    const _description = _imageGalary.offsetParent.querySelector('.galary__title');
    const _imagePopup = document.querySelector('.popup__img');
    const _descriptionElement = document.querySelector('.popup__description');

    evt.preventDefault();
    _imagePopup.src = _imageGalary.src;
    _imagePopup.alt = 'фото ' + _description.textContent;
    _descriptionElement.textContent = _description.textContent;
  } */

  _getTemplate() {
    const _cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.galary__item')
      .cloneNode(true);

    return _cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const _title = this._element.querySelector('.galary__title');
    const _image = this._element.querySelector('.galary__img');

    _title.textContent = this._name;
    _image.src = this._link;
    _image.alt = 'фото ' + this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    const _like = this._element.querySelector('.galary__like');
    const _trash = this._element.querySelector('.galary__delete-item');
    const _imageLink = this._element.querySelector('.galary__link-img');

    _like.addEventListener('click', () => { this._handleLikeButton(); });
    _trash.addEventListener('click', () => { this._handleTrashButton(); });
    _imageLink.addEventListener('click', this.#handleCardClick);
  }

  _handleLikeButton() {
    const _like = this._element.querySelector('.galary__like');
    _like.classList.toggle('galary__like_active');
  }

  _handleTrashButton() {
    this._element.remove();
    this._element = null;
  }
}