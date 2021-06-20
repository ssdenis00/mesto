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
  initialCards
} from '../utils/constants.js';

const validProfile = new FormValidator(configValidate, formEditProfile);
const validAddCard = new FormValidator(configValidate, formAddCard);

const sectionInitial = new Section({
  items: initialCards, renderer: (item) => {
    const cardInitial = new Card(item, '#galary__item', {
      handleCardClick: (evt) => {
        evt.preventDefault();
        const popupWithImage = new PopupWithImage(popupImgSelector);
        popupWithImage.open(cardElement);
        popupWithImage.setEventListeners();
      }
    }
    );
    const cardElement = cardInitial.generateCard();

    sectionInitial.addItem(cardElement);
  }
}, galaryGrid);

const userInfo = new UserInfo({ nameSelector: nameProfile, jobSelector: jobProfile });

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitForm: (inputArr) => {
    userInfo.setUserInfo(inputArr);
    popupProfile.close();
  }, resetForm: () => {
    validProfile.resetForm();
  }
});

const popupAddCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (inputArr) => {

    const obj = [{
      name: inputArr[0],
      link: inputArr[1]
    }];

    const sectionNewCard = new Section({
      items: obj, renderer: (item) => {
        const cardNew = new Card(item, '#galary__item', {
          handleCardClick: (e) => {
            e.preventDefault();
            const popupWithImageNew = new PopupWithImage(popupImgSelector);
            popupWithImageNew.open(cardElementNew);
            popupWithImageNew.setEventListeners();
          }
        }
        );

        const cardElementNew = cardNew.generateCard();

        sectionNewCard.addItem(cardElementNew);
      }
    }, galaryGrid);

    sectionNewCard.rendererElement();

    popupAddCard.close();
  }, resetForm: () => {
    validAddCard.resetForm();
  }
});

function openPopupEditProfile() {
  userInfo.getUserInfo();
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