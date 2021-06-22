export class Card {
  #handleCardClick;
  #link;
  #name;
  #template;
  #element;
  #like;

  constructor(cardData, templateSelector, { handleCardClick }) {
    this.#link = cardData.link;
    this.#name = cardData.title;
    this.#template = templateSelector;
    this.#handleCardClick = handleCardClick;
  }

  #getTemplate() {
    const cardElement = document
      .querySelector(this.#template)
      .content
      .querySelector('.galary__item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this.#element = this.#getTemplate();
    const title = this.#element.querySelector('.galary__title');
    const image = this.#element.querySelector('.galary__img');

    title.textContent = this.#name;
    image.src = this.#link;
    image.alt = 'фото ' + this.#name;

    this.#setEventListeners();

    return this.#element;
  }

  #setEventListeners() {
    this.#like = this.#element.querySelector('.galary__like');
    const trash = this.#element.querySelector('.galary__delete-item');
    const imageLink = this.#element.querySelector('.galary__link-img');

    this.#like.addEventListener('click', () => { this.#handleLikeButton(); });
    trash.addEventListener('click', () => { this.#handleTrashButton(); });
    imageLink.addEventListener('click', this.#handleCardClick);
  }

  #handleLikeButton() {
    this.#like.classList.toggle('galary__like_active');
  }

  #handleTrashButton() {
    this.#element.remove();
    this.#element = null;
  }
}