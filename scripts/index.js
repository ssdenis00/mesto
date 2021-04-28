const editBtn = document.querySelector('.profile__edit-btn');
const popupEditVisible = document.querySelector('.popup_type_edit');
const popupAddCardVisible = document.querySelector('.popup_type_add-card');
const closeEditBtn = document.querySelector('.popup__cross_type_edit');
const closeAddCardBtn = document.querySelector('.popup__cross_type_add-card');
const formElementEdit = document.querySelector('.popup__form_type_edit');
const formElementAddCard = document.querySelector('.popup__form_type_add-card');
const addCardBtn = document.querySelector('.profile__add-btn');
let nameInput = formElementEdit.querySelector('.popup__form-text_input_name');
let jobInput = formElementEdit.querySelector('.popup__form-text_input_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let popupTitle = document.querySelector('.popup__title');

function popupEdit() {
  popupEditVisible.classList.add('popup_visible-on')
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

editBtn.addEventListener('click', popupEdit);

let titleInput = document.querySelector('.popup__form-text_input_title');
let imgInput = document.querySelector('.popup__form-text_input_img');
function popupAddCards() {
  popupAddCardVisible.classList.add('popup_visible-on');
  titleInput.value = '';
  imgInput.value = '';
}

addCardBtn.addEventListener('click', popupAddCards);

function popupEditVisibleOff() {
  popupEditVisible.classList.remove('popup_visible-on');
}
closeEditBtn.addEventListener('click', popupEditVisibleOff);

function popupAddCardVisibleOff() {
  popupAddCardVisible.classList.remove('popup_visible-on');
}

closeAddCardBtn.addEventListener('click', popupAddCardVisibleOff);

const popupBtnEdit = document.querySelector('.popup__btn_type_edit');
const popupBtnCard = document.querySelector('.popup__btn_type_card');

function formEdit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupEditVisibleOff();
}

formElementEdit.addEventListener('submit', formEdit);



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
const galaryItem = document.querySelector('#galary__item').content;
const galaryItemNew = galaryItem.querySelector('.galary__item');

initialCards.forEach((item => {
  const galaryItemNew = galaryItem.querySelector('.galary__item').cloneNode(true);
  let count = 0;
  count++;
  galaryItemNew.querySelector('.galary__title').textContent = item.name;
  galaryItemNew.querySelector('.galary__img').src = item.link;
  galaryGrid.prepend(galaryItemNew);
}));

function formAddCard(evt) {
  const galaryItemNew = galaryItem.querySelector('.galary__item').cloneNode(true);
  let obj = {
    name: titleInput.value,
    link: imgInput.value
  };
  evt.preventDefault();
  initialCards.push(obj);
  galaryItemNew.querySelector('.galary__title').textContent = obj.name;
  galaryItemNew.querySelector('.galary__img').src = obj.link;
  galaryGrid.prepend(galaryItemNew);
  popupAddCardVisibleOff();
}
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
const closeImgBtn = document.querySelector('.popup__cross_type_img');
function popupImgVisibleOff() {
  popupImgVisible.classList.remove('popup_visible-on');
};

const imagesLinks = document.querySelectorAll('.galary__link-img');
Array.from(imagesLinks).forEach(links => {
  links.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    document.querySelector('.popup_type_img').classList.add('popup_visible-on');
    document.querySelector('.popup__img').src = eventTarget.src;
  });
});

closeImgBtn.addEventListener('click', popupImgVisibleOff);