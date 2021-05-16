const profilePopup = document.querySelector('.popup_type_edit');
const formElementEdit = document.querySelector('.popup__form_type_edit');
const nameInput = formElementEdit.querySelector('.popup__form-text_input_name');
const jobInput = formElementEdit.querySelector('.popup__form-text_input_job');
const popupBtnEdit = document.querySelector('.popup__btn_type_edit');
const popupBtnCard = document.querySelector('.popup__btn_type_card');
const titleInput = document.querySelector('.popup__form-text_input_title');
const imgInput = document.querySelector('.popup__form-text_input_img');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closeEditBtn = document.querySelector('.popup__cross_type_edit');
const editBtn = document.querySelector('.profile__edit-btn');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const popupTitle = document.querySelector('.popup__title');
const addCardBtn = document.querySelector('.profile__add-btn');
const closeAddCardBtn = document.querySelector('.popup__cross_type_add-card');
const galaryGrid = document.querySelector('.galary__grid');
const galaryTemplate = document.querySelector('#galary__item').content;
const galaryItem = galaryTemplate.querySelector('.galary__item');
const formElementAddCard = document.querySelector('.popup__form_type_add-card');
const imgPopup = document.querySelector('.popup_type_img');
const closeImgBtn = document.querySelector('.popup__cross_type_img');

function openPopup(elem, func) {
  elem.classList.add('popup_visible-on');
  document.addEventListener('keydown', func);
}

function openPopupEdit() {
  openPopup(profilePopup, setCloseProfilePopupEscListener);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  enableValidation(config);
}

function closePopup(elem, func) {
  elem.classList.remove('popup_visible-on');
  document.removeEventListener('keydown', func);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup, setCloseProfilePopupEscListener);
}

function openPopupAddCards() {
  openPopup(popupAddCard, setCloseAddCardPopupEscListener);
  formElementAddCard.reset();
  enableValidation(config);
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
  openPopup(imgPopup, setCloseImgPopupEscListener);
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
  const obj = {
    name: item.name,
    link: item.link
  }
  addElementInGalary(createCard(obj));
}));

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const obj = {
    name: titleInput.value,
    link: imgInput.value
  }
  addElementInGalary(createCard(obj));
  closePopup(popupAddCard, setCloseAddCardPopupEscListener);
}

function closeOverlay(evt, position, func) {
  if (evt.target === evt.currentTarget) {
    closePopup(position, func);
  }
}

function closePopupEsc(evt, element, func) {
  if (evt.key === 'Escape') {
    closePopup(element, func);
  }
}

function setCloseProfilePopupEscListener(evt) {
  closePopupEsc(evt, profilePopup, setCloseProfilePopupEscListener);
}

function setCloseAddCardPopupEscListener(evt) {
  closePopupEsc(evt, popupAddCard, setCloseAddCardPopupEscListener);
}

function setCloseImgPopupEscListener(evt) {
  closePopupEsc(evt, imgPopup, setCloseImgPopupEscListener);
}

formElementAddCard.addEventListener('submit', handleAddCardSubmit);

addCardBtn.addEventListener('click', openPopupAddCards);

formElementEdit.addEventListener('submit', handleProfileSubmit);

closeEditBtn.addEventListener('click', () => closePopup(profilePopup, setCloseProfilePopupEscListener));

editBtn.addEventListener('click', openPopupEdit);

closeAddCardBtn.addEventListener('click', () => closePopup(popupAddCard, setCloseAddCardPopupEscListener));

closeImgBtn.addEventListener('click', () => closePopup(imgPopup, setCloseImgPopupEscListener));

profilePopup.addEventListener('click', (evt) => { closeOverlay(evt, profilePopup, setCloseProfilePopupEscListener) });

popupAddCard.addEventListener('click', (evt) => { closeOverlay(evt, popupAddCard, setCloseAddCardPopupEscListener) });

imgPopup.addEventListener('click', (evt) => { closeOverlay(evt, imgPopup, setCloseImgPopupEscListener) });