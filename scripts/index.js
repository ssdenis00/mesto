const popupEditVisible = document.querySelector('.popup_type_edit');
const formElementEdit = document.querySelector('.popup__form_type_edit');

function addVisible(el) {
  el.classList.add('popup_visible-on');
}

let nameInput = formElementEdit.querySelector('.popup__form-text_input_name');
let jobInput = formElementEdit.querySelector('.popup__form-text_input_job');

//открытие попапа редактирования
function openPopupEdit() {
  addVisible(popupEditVisible);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

const editBtn = document.querySelector('.profile__edit-btn');

editBtn.addEventListener('click', openPopupEdit);

function removeVisible(el) {
  el.classList.remove('popup_visible-on');
}

const closeEditBtn = document.querySelector('.popup__cross_type_edit');

closeEditBtn.addEventListener('click', function () {
  removeVisible(popupEditVisible);
});

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let popupTitle = document.querySelector('.popup__title');

function formEdit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  removeVisible(popupEditVisible);
}

formElementEdit.addEventListener('submit', formEdit);

const closeAddCardBtn = document.querySelector('.popup__cross_type_add-card');

closeAddCardBtn.addEventListener('click', function () {
  removeVisible(popupAddCardVisible);
});

const popupBtnEdit = document.querySelector('.popup__btn_type_edit');
const popupBtnCard = document.querySelector('.popup__btn_type_card');

let titleInput = document.querySelector('.popup__form-text_input_title');
let imgInput = document.querySelector('.popup__form-text_input_img');
const popupAddCardVisible = document.querySelector('.popup_type_add-card');

function popupAddCards() {
  addVisible(popupAddCardVisible);
  titleInput.value = '';
  imgInput.value = '';
}

const addCardBtn = document.querySelector('.profile__add-btn');

addCardBtn.addEventListener('click', popupAddCards);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const galaryGrid = document.querySelector('.galary__grid');
const galaryTemplate = document.querySelector('#galary__item').content;
const galaryItem = galaryTemplate.querySelector('.galary__item');

function addElementInGalary(element) {
  galaryGrid.prepend(element);
}

initialCards.forEach((item => {
  const galaryItemNew = galaryItem.cloneNode(true);
  const galaryTitle = galaryItemNew.querySelector('.galary__title');
  const galaryImage = galaryItemNew.querySelector('.galary__img');
  galaryTitle.textContent = item.name;
  galaryImage.src = item.link;
  addElementInGalary(galaryItemNew);
}));

function formAddCard(evt) {
  const galaryItemNew = galaryItem.cloneNode(true);
  const galaryTitle = galaryItemNew.querySelector('.galary__title');
  const galaryImage = galaryItemNew.querySelector('.galary__img');
  let obj = {
    name: titleInput.value,
    link: imgInput.value
  };
  evt.preventDefault();
  initialCards.push(obj);
  galaryTitle.textContent = obj.name;
  galaryImage.src.src = obj.link;
  addElementInGalary(galaryItemNew);
  removeVisible(popupAddCardVisible);
}

const formElementAddCard = document.querySelector('.popup__form_type_add-card');

formElementAddCard.addEventListener('submit', formAddCard);

const likeBtn = document.querySelectorAll('.galary__like');

Array.from(likeBtn).forEach(like => {
  like.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('galary__like_active');
  });
});

const trashBtn = document.querySelectorAll('.galary__delete-item');

Array.from(trashBtn).forEach(trash => {
  trash.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.parentElement.remove();
  });
});

const popupImgVisible = document.querySelector('.popup_type_img');

const imagesLinks = document.querySelectorAll('.galary__link-img');
Array.from(imagesLinks).forEach(links => {
  links.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    const description = eventTarget.offsetParent.querySelector('.galary__title');
    const image = document.querySelector('.popup__img');
    const descriptionElement = document.querySelector('.popup__description');
    addVisible(popupImgVisible);
    image.src = eventTarget.src;
    descriptionElement.textContent = description.textContent;
  });
});

const closeImgBtn = document.querySelector('.popup__cross_type_img');

closeImgBtn.addEventListener('click', function () {
  removeVisible(popupImgVisible);
});