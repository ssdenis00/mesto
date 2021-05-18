const profilePopup = document.querySelector('.popup_type_edit');
const formEditProfile = document.querySelector('.popup__form_type_edit');
const nameInput = formEditProfile.querySelector('.popup__form-text_input_name');
const jobInput = formEditProfile.querySelector('.popup__form-text_input_job');
const titleInput = document.querySelector('.popup__form-text_input_title');
const imgInput = document.querySelector('.popup__form-text_input_img');
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonCloseProfilePopup = document.querySelector('.popup__cross_type_edit');
const buttonOpenProfilePopup = document.querySelector('.profile__edit-btn');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const popupTitle = document.querySelector('.popup__title');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-btn');
const buttonCloseAddCardPopup = document.querySelector('.popup__cross_type_add-card');
const galaryGrid = document.querySelector('.galary__grid');
const galaryTemplate = document.querySelector('#galary__item').content;
const galaryItem = galaryTemplate.querySelector('.galary__item');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const imgPopup = document.querySelector('.popup_type_img');
const buttonCloseImgPopup = document.querySelector('.popup__cross_type_img');

function openPopup(elem) {
  const inputList = Array.from(elem.querySelectorAll(config.inputSelector));
  const submit = elem.querySelector(config.buttonClass);
  const form = elem.querySelector(config.formSelector);

  elem.classList.add('popup_visible-on');
  document.addEventListener('keydown', closePopupEsc);

  inputList.forEach(item => {
    checkInputValidity(form, item, config);
    setBtnState(submit, inputList);
  });
}

function openPopupEditProfile() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(profilePopup);
}

function closePopup(elem) {
  elem.classList.remove('popup_visible-on');
  document.removeEventListener('keydown', closePopupEsc);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

function openPopupAddCards() {
  formAddCard.reset();
  openPopup(popupAddCard);
}

function addElementInGalary(elem) {
  galaryGrid.prepend(elem);
}

function handleOpenPopupImg(evt) {
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

function handleTrashButton(evt) {
  const eventTarget = evt.target;
  eventTarget.closest('.galary__item').remove();
}

function handleLikeButton(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('galary__like_active');
}

function createCard(cardData) {
  const galaryItemNew = galaryItem.cloneNode(true);
  const galaryTitle = galaryItemNew.querySelector('.galary__title');
  const galaryImage = galaryItemNew.querySelector('.galary__img');
  const galaryLike = galaryItemNew.querySelector('.galary__like');
  const galaryTrash = galaryItemNew.querySelector('.galary__delete-item');
  const galaryImageLink = galaryItemNew.querySelector('.galary__link-img');
  galaryTitle.textContent = cardData.name;
  galaryImage.src = cardData.link;
  galaryImage.alt = 'фото ' + cardData.name;
  galaryLike.addEventListener('click', handleLikeButton);
  galaryTrash.addEventListener('click', handleTrashButton);
  galaryImageLink.addEventListener('click', handleOpenPopupImg);
  return galaryItemNew;
}

initialCards.forEach((item => {
  addElementInGalary(createCard(item));
}));

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const obj = {
    name: titleInput.value,
    link: imgInput.value
  }
  addElementInGalary(createCard(obj));
  closePopup(popupAddCard);
}

function closeOverlay(evt, position) {
  if (evt.target === evt.currentTarget) {
    closePopup(position);
  }
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_visible-on');
    closePopup(popup);
  }
}

enableValidation(config);

formAddCard.addEventListener('submit', handleAddCardSubmit);

buttonOpenAddCardPopup.addEventListener('click', openPopupAddCards);

formEditProfile.addEventListener('submit', handleProfileSubmit);

buttonCloseProfilePopup.addEventListener('click', () => closePopup(profilePopup));

buttonOpenProfilePopup.addEventListener('click', openPopupEditProfile);

buttonCloseAddCardPopup.addEventListener('click', () => closePopup(popupAddCard));

buttonCloseImgPopup.addEventListener('click', () => closePopup(imgPopup));

profilePopup.addEventListener('click', (evt) => { closeOverlay(evt, profilePopup) });

popupAddCard.addEventListener('click', (evt) => { closeOverlay(evt, popupAddCard) });

imgPopup.addEventListener('click', (evt) => { closeOverlay(evt, imgPopup) });