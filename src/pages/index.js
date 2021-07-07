import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Api } from '../components/Api.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithFormSubmit } from '../components/PopupWithFormSubmit.js';
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
  avatarSelector
} from '../utils/constants.js';

const userInfo = new UserInfo({ nameSelector: nameProfile, aboutSelector: jobProfile, avatarSelector: avatarSelector });

const api = new Api(optionsApi);

Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData.avatar);

    sectionInitial.rendererElement(cards, userData._id);
  })
  .catch(err => { console.log(err) });

const validProfile = new FormValidator(configValidate, formEditProfile);
const validAddCard = new FormValidator(configValidate, formAddCard);
const validAvatar = new FormValidator(configValidate, formAvatar);

const popupWithImage = new PopupWithImage(popupImgSelector);
popupWithImage.setEventListeners();

const sectionInitial = new Section({
  renderer: (item, id) => {
    sectionInitial.addItem(createCard(item, id));
  }
}, galaryGrid);

const createCard = (obj, id) => {
  const card = new Card(obj, templateSelector, id, {
    handleCardClick: (evt) => {
      evt.preventDefault();
      popupWithImage.open(cardElement);
    },
    handleTrashBtn: () => {
      popupConfirm.open(cardElement);
    },
    addLike: () => {
      api.addLike(card.getImgId())
        .then(() => { card.addLike(); })
        .catch(err => { console.log(err) });
    },
    removeLike: () => {
      api.removeLike(card.getImgId())
        .then(() => { card.removeLike(); })
        .catch(err => { console.log(err) });
    }
  }
  );
  const cardElement = card.generateCard();

  return cardElement;
}

const popupAddCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (inputData) => {
    popupAddCard.renderLoading(true);
    api.addCard(inputData)
      .then(res => {
        sectionInitial.addItem(createCard(res, userInfo.getUserInfo().id));
        popupAddCard.close();
        validAddCard.resetForm();
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => { popupAddCard.renderLoading(false, 'Создать') });
  }
});

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitForm: (inputData) => {
    popupProfile.renderLoading(true);
    api.editUserInfo(inputData)
      .then(res => {
        userInfo.setUserInfo(res);
        popupProfile.close();
        validProfile.resetForm();
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => { popupProfile.renderLoading(false, 'Сохранить') });
  }
});

const popupConfirm = new PopupWithFormSubmit(popupConfirmSelector, {
  submitForm: (evt) => {
    popupConfirm.renderLoading(true);
    evt.preventDefault();
    api.deleteCard(popupConfirm.setImgId())
      .then(() => {
        popupConfirm.removeCard();
        popupConfirm.close();
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => { popupConfirm.renderLoading(false, 'Да') });
  }
});

const popupAvatar = new PopupWithForm(popupAvatarSelector, {
  submitForm: (inputData) => {
    popupAvatar.renderLoading(true);
    api.changeAvatar(inputData)
      .then(res => {
        userInfo.setAvatar(res.avatar);
        popupAvatar.close();
        validAvatar.resetForm();
      })
      .catch(err => { console.error(err) })
      .finally(() => { popupAvatar.renderLoading(false, 'Сохранить') });
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