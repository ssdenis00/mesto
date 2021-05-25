import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';
import { config } from './config-validate.js';

const profilePopup = document.querySelector('.popup_type_edit');
export const formEditProfile = document.querySelector('.popup__form_type_edit');
const nameInput = formEditProfile.querySelector('.popup__form-text_input_name');
const jobInput = formEditProfile.querySelector('.popup__form-text_input_job');
const titleInput = document.querySelector('.popup__form-text_input_title');
const imgInput = document.querySelector('.popup__form-text_input_img');
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonCloseProfilePopup = document.querySelector('.popup__cross_type_edit');
const buttonOpenProfilePopup = document.querySelector('.profile__edit-btn');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-btn');
const buttonCloseAddCardPopup = document.querySelector('.popup__cross_type_add-card');
const galaryGrid = document.querySelector('.galary__grid');
export const formAddCard = document.querySelector('.popup__form_type_add-card');
export const imgPopup = document.querySelector('.popup_type_img');
const buttonCloseImgPopup = document.querySelector('.popup__cross_type_img');
const validProfile = new FormValidator(config, formEditProfile);
const validAddCard = new FormValidator(config, formAddCard);

validProfile.enableValidation();

validAddCard.enableValidation();

export function openPopup(elem) {
  elem.classList.add('popup_visible-on');
  elem.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closePopupEsc);
}

function openPopupEditProfile() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  validProfile.resetForm(profilePopup);
  openPopup(profilePopup);
}

function closePopup(elem) {
  elem.classList.remove('popup_visible-on');
  elem.removeEventListener('click', closeOverlay);
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
  validAddCard.resetForm(popupAddCard);
  openPopup(popupAddCard);
}

function addElementInGalary(elem) {
  galaryGrid.prepend(elem);
}

initialCards.forEach((item) => {
  const card = new Card(item, '#galary__item');
  const cardElement = card.generateCard();

  addElementInGalary(cardElement);
});

function handleAddCardSubmit(evt) {
  const obj = {
    name: titleInput.value,
    link: imgInput.value
  }
  const card = new Card(obj, '#galary__item');
  const cardElement = card.generateCard();

  evt.preventDefault();
  addElementInGalary(cardElement);
  closePopup(popupAddCard);
}

function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function closePopupEsc(evt) {
  if ((evt.key === 'Escape') || (evt.target === evt.currentTarget)) {
    const popup = document.querySelector('.popup_visible-on');
    closePopup(popup);
  }
}

formAddCard.addEventListener('submit', handleAddCardSubmit);

buttonOpenAddCardPopup.addEventListener('click', openPopupAddCards);

formEditProfile.addEventListener('submit', handleProfileSubmit);

buttonCloseProfilePopup.addEventListener('click', () => closePopup(profilePopup));

buttonOpenProfilePopup.addEventListener('click', openPopupEditProfile);

buttonCloseAddCardPopup.addEventListener('click', () => closePopup(popupAddCard));

buttonCloseImgPopup.addEventListener('click', () => closePopup(imgPopup));