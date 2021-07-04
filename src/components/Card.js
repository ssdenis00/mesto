export class Card {
  #handleCardClick;
  #link;
  #name;
  #template;
  #element;
  #like;
  #countLike;
  #handleTrashBtn;
  #id;
  #owner;

  constructor(cardData, templateSelector, { handleCardClick, handleTrashBtn }) {
    this.#link = cardData.link;
    this.#name = cardData.name;
    this.#countLike = cardData.likes;
    this.#id = cardData._id;
    this.#owner = cardData.owner;
    this.#template = templateSelector;
    this.#handleCardClick = handleCardClick;
    this.#handleTrashBtn = handleTrashBtn;
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
    const countLikeSelector = this.#element.querySelector('.galary__like-count');

    title.textContent = this.#name;
    image.src = this.#link;
    image.alt = 'фото ' + this.#name;
    countLikeSelector.textContent = this.#countLike.length;
    image.id = this.#id;
    image.owner = this.#owner;

    this.#setEventListeners();

    return this.#element;
  }

  #setEventListeners() {
    this.#like = this.#element.querySelector('.galary__like');
    const trash = this.#element.querySelector('.galary__delete-item');
    const imageLink = this.#element.querySelector('.galary__link-img');

    this.#like.addEventListener('click', () => { this.#handleLikeButton(); });
    trash.addEventListener('click', this.#handleTrashBtn);
    imageLink.addEventListener('click', this.#handleCardClick);
  }

  #handleLikeButton() {
    this.#like.classList.toggle('galary__like_active');
  }
}