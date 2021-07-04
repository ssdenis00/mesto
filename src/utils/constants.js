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
export const popupConfirmSelector = document.querySelector('.popup_type_delete');
export const popupAvatarSelector = document.querySelector('.popup_type_avatar');
export const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-overlay');
export const avatar = document.querySelector('.profile__avatar');
export const formAvatar = document.querySelector('.popup__form_type_avatar');

export const configValidate = {
  inputSelector: '.popup__form-text',
  buttonClass: '.popup__btn',
  inputErrorClass: 'popup__form-text_state_error',
  errorClass: 'popup__form-error_visible'
};

export const optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: '374fcf1a-996b-4e35-88d8-3be82638086e',
    'Content-Type': 'application/json'
  }
};