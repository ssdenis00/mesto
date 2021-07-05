import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Api } from '../components/Api.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithFormSubmit } from '../components/PopupWithFormSubmit.js';
import { renderLoading } from '../utils/renderLoading.js';
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
  templateSelector,
  jobInput,
  nameInput,
  optionsApi,
  popupConfirmSelector,
  popupAvatarSelector,
  buttonOpenPopupAvatar,
  formAvatar,
  avatar,
  formConfirm
} from '../utils/constants.js';

const api = new Api(optionsApi);
api.getUserInfo()
  .then(res => {
    nameProfile.textContent = res.name;
    nameProfile.id = res._id;
    jobProfile.textContent = res.about;
    avatar.src = res.avatar;
  });

api.getInitialCards()
  .then(cards => {
    sectionInitial.rendererElement(cards);
  });


const validProfile = new FormValidator(configValidate, formEditProfile);
const validAddCard = new FormValidator(configValidate, formAddCard);
const validAvatar = new FormValidator(configValidate, formAvatar);

const popupWithImage = new PopupWithImage(popupImgSelector);
popupWithImage.setEventListeners();

const sectionInitial = new Section({
  renderer: (item) => {
    sectionInitial.addItem(createCard(item));
  }
}, galaryGrid);

const createCard = (obj) => {
  const card = new Card(obj, templateSelector, {
    handleCardClick: (evt) => {
      evt.preventDefault();
      popupWithImage.open(cardElement);
    },
    handleTrashBtn: () => {
      popupConfirm.open(cardElement);
    },
    addLike: () => {
      api.addLike(card.getImgId());
    },
    removeLike: () => {
      api.removeLike(card.getImgId());
    }
  }
  );
  const cardElement = card.generateCard();

  if (cardElement.querySelector('.galary__img').owner._id !== nameProfile.id) {
    cardElement.querySelector('.galary__delete-item').remove();
  }

  return cardElement;
}

const popupAddCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (inputData) => {
    renderLoading(true, formAddCard);
    api.addCard(inputData)
      .then(res => {
        sectionInitial.addItem(createCard(res));
        popupAddCard.close();
      });

  }, resetForm: () => {
    validAddCard.resetForm();
  }
});

const userInfo = new UserInfo({ nameSelector: nameProfile, aboutSelector: jobProfile });

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitForm: (inputData) => {
    renderLoading(true, formEditProfile);
    api.editUserInfo(inputData)
      .then(res => {
        userInfo.setUserInfo(res);
        popupProfile.close();
      });

  }, resetForm: () => {
    validProfile.resetForm();
  }
});

const popupConfirm = new PopupWithFormSubmit(popupConfirmSelector, {
  submitForm: (evt) => {
    renderLoading(true, formConfirm);
    evt.preventDefault();
    api.deleteCard(popupConfirm.setImgId());
    popupConfirm.removeCard();
    popupConfirm.close();
  }
});

const popupAvatar = new PopupWithForm(popupAvatarSelector, {
  submitForm: (inputData) => {
    renderLoading(true, formAvatar);
    api.changeAvatar(inputData)
      .then(res => {
        avatar.src = res.avatar;
        popupAvatar.close();
      });

  }, resetForm: () => {
    validAvatar.resetForm();
  }
});

function openPopupEditProfile() {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
  popupProfile.open();
}

validProfile.enableValidation();

validAddCard.enableValidation();

validAvatar.enableValidation();

popupAddCard.setEventListeners();

popupProfile.setEventListeners();

popupConfirm.setEventListeners();

popupAvatar.setEventListeners();

buttonOpenAddCardPopup.addEventListener('click', () => { popupAddCard.open() });

buttonOpenProfilePopup.addEventListener('click', openPopupEditProfile);

buttonOpenPopupAvatar.addEventListener('click', () => { popupAvatar.open() });