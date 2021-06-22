export const popupProfileSelector = document.querySelector('.popup_type_edit');
export const formEditProfile = document.querySelector('.popup__form_type_edit');
export const popupAddCardSelector = document.querySelector('.popup_type_add-card');
export const buttonOpenProfilePopup = document.querySelector('.profile__edit-btn');
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__description');
export const buttonOpenAddCardPopup = document.querySelector('.profile__add-btn');
export const galaryGrid = document.querySelector('.galary__grid');
export const formAddCard = document.querySelector('.popup__form_type_add-card');
export const popupImgSelector = document.querySelector('.popup_type_img');
export const templateSelector = '#galary__item';
export const jobInput = document.querySelector('.popup__form-text_input_job');
export const nameInput = document.querySelector('.popup__form-text_input_name');

export const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const configValidate = {
  inputSelector: '.popup__form-text',
  buttonClass: '.popup__btn',
  inputErrorClass: 'popup__form-text_state_error',
  errorClass: 'popup__form-error_visible'
};