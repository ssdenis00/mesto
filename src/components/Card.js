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
  #myId;
  #galaryImage;
  #trash;

  constructor(cardData, templateSelector, id,
    {
      handleCardClick,
      handleTrashBtn,
      addLike,
      removeLike
    }) {
    this.#link = cardData.link;
    this.#name = cardData.name;
    this.#likes = cardData.likes;
    this.#id = cardData._id;
    this.#owner = cardData.owner;
    this.#myId = id;
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
    this.#galaryImage = this.#element.querySelector('.galary__img');
    this.#countLikeSelector = this.#element.querySelector('.galary__like-count');

    title.textContent = this.#name;
    this.#galaryImage.src = this.#link;
    this.#galaryImage.alt = 'фото ' + this.#name;
    this.#countLikeSelector.textContent = this.#likes.length;
    this.#galaryImage.id = this.#id;
    this.#galaryImage.owner = this.#owner;

    this.#checkLiked();

    this.#checkOwnerCard();

    this.#setEventListeners();

    return this.#element;
  }

  #setEventListeners() {
    const imageLink = this.#element.querySelector('.galary__link-img');

    this.#like.addEventListener('click', () => {
      if (this.#like.classList.contains('galary__like_active')) {
        this.#removeLike();
      } else {
        this.#addLike();
      }
    });
    this.#trash.addEventListener('click', this.#handleTrashBtn);
    imageLink.addEventListener('click', this.#handleCardClick);
  }

  #checkLiked() {
    this.#likes.forEach(element => {
      if (element._id === this.#myId) {
        this.#like.classList.add('galary__like_active');
      }
    });
  }

  #checkOwnerCard() {
    this.#trash = this.#element.querySelector('.galary__delete-item');

    if (this.#galaryImage.owner._id !== this.#myId) {
      this.#trash.remove();
    }
  }

  getImgId() {
    return this.#element.querySelector('.galary__img').id;
  }

  addLike() {
    this.#like.classList.add('galary__like_active');
    this.#likes.length = this.#likes.length + 1;
    this.#countLikeSelector.textContent = this.#likes.length;
  }

  removeLike() {
    this.#like.classList.remove('galary__like_active');
    this.#likes.length = this.#likes.length - 1;
    this.#countLikeSelector.textContent = this.#likes.length;
  }
}