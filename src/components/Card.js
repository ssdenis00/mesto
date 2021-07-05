export class Card {
  #handleCardClick;
  #link;
  #name;
  #template;
  #element;
  #like;
  #likes;
  #handleTrashBtn;
  #id;
  #owner;
  #countLikeSelector;
  #addLike;
  #removeLike;

  constructor(cardData, templateSelector, { handleCardClick, handleTrashBtn, addLike, removeLike }) {
    this.#link = cardData.link;
    this.#name = cardData.name;
    this.#likes = cardData.likes;
    this.#id = cardData._id;
    this.#owner = cardData.owner;
    this.#template = templateSelector;
    this.#handleCardClick = handleCardClick;
    this.#handleTrashBtn = handleTrashBtn;
    this.#addLike = addLike;
    this.#removeLike = removeLike;
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
    this.#like = this.#element.querySelector('.galary__like');
    const title = this.#element.querySelector('.galary__title');
    const image = this.#element.querySelector('.galary__img');
    this.#countLikeSelector = this.#element.querySelector('.galary__like-count');

    title.textContent = this.#name;
    image.src = this.#link;
    image.alt = 'фото ' + this.#name;
    this.#countLikeSelector.textContent = this.#likes.length;
    image.id = this.#id;
    image.owner = this.#owner;

    this.#likes.forEach(element => {
      if (element._id === "cbb319985b5d9c3ff901af5e") {
        this.#like.classList.add('galary__like_active');
      }
    });

    this.#setEventListeners();

    return this.#element;
  }

  #setEventListeners() {

    const trash = this.#element.querySelector('.galary__delete-item');
    const imageLink = this.#element.querySelector('.galary__link-img');

    this.#like.addEventListener('click', () => {
      if (this.#like.classList.contains('galary__like_active')) {
        this.removeLike();
      } else {
        this.addLike();
      }
    });
    trash.addEventListener('click', this.#handleTrashBtn);
    imageLink.addEventListener('click', this.#handleCardClick);
  }

  getImgId() {
    return this.#element.querySelector('.galary__img').id;
  }

  addLike() {
    this.#addLike();
    this.#like.classList.add('galary__like_active');
    this.#likes.length = this.#likes.length + 1;
    this.#countLikeSelector.textContent = this.#likes.length;
  }

  removeLike() {
    this.#removeLike();
    this.#like.classList.remove('galary__like_active');
    this.#likes.length = this.#likes.length - 1;
    this.#countLikeSelector.textContent = this.#likes.length;
  }
}