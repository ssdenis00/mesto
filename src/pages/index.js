import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import '../pages/index.css';
import {
  popupProfileSelector,
  formEditProfile,
  popupAddCardSelector,
  buttonOpenProfilePopup,
  nameProfile,
  jobProfile,
  buttonOpenAddCardPopup,
  galaryGrid,
  formAddCard,
  popupImgSelector,
  configValidate,
  initialCards,
  templateSelector,
  jobInput,
  nameInput
} from '../utils/constants.js';

const validProfile = new FormValidator(configValidate, formEditProfile);
const validAddCard = new FormValidator(configValidate, formAddCard);

const popupWithImage = new PopupWithImage(popupImgSelector);
popupWithImage.setEventListeners();

const createCard = (obj) => {
  const card = new Card(obj, templateSelector, {
    handleCardClick: (evt) => {
      evt.preventDefault();
      popupWithImage.open(cardElement);
    }
  }
  );
  const cardElement = card.generateCard();

  return cardElement;
}

const sectionInitial = new Section({
  items: initialCards, renderer: (item) => {
    sectionInitial.addItem(createCard(item));
  }
}, galaryGrid);

const userInfo = new UserInfo({ nameSelector: nameProfile, jobSelector: jobProfile });

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitForm: (inputData) => {
    userInfo.setUserInfo(inputData);
    popupProfile.close();
  }, resetForm: () => {
    validProfile.resetForm();
  }
});

const popupAddCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (inputData) => {

    sectionInitial.addItem(createCard(inputData));

    popupAddCard.close();
  }, resetForm: () => {
    validAddCard.resetForm();
  }
});

function openPopupEditProfile() {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
  popupProfile.open();
}

function openPopupAddCards() {
  popupAddCard.open();
}

sectionInitial.rendererElement();

validProfile.enableValidation();

validAddCard.enableValidation();

popupAddCard.setEventListeners();

popupProfile.setEventListeners();

buttonOpenAddCardPopup.addEventListener('click', openPopupAddCards);

buttonOpenProfilePopup.addEventListener('click', openPopupEditProfile);