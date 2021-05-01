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

function openPopup(elem) {
  elem.classList.add('popup_visible-on');
}

function openPopupEdit() {
  openPopup(profilePopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup(elem) {
  elem.classList.remove('popup_visible-on');
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

function openPopupAddCards() {
  openPopup(popupAddCard);
  formElementAddCard.reset();
}

function addElementInGalary(elem) {
  galaryGrid.prepend(elem);
}

function handleOpenPopupImg(elem) {
  elem.addEventListener('click', function (evt) {
    evt.preventDefault();
    const eventTarget = evt.target;
    const description = eventTarget.offsetParent.querySelector('.galary__title');
    const image = document.querySelector('.popup__img');
    const descriptionElement = document.querySelector('.popup__description');
    openPopup(imgPopup);
    image.src = eventTarget.src;
    image.alt = 'фото ' + description.textContent;
    descriptionElement.textContent = description.textContent;
  });
}

function handleTrashButton(elem) {
  elem.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.closest('.galary__item').remove();
  });
}

function handleLikeButton(elem) {
  elem.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('galary__like_active');
  });
}

function createCard(cardTitle, cardImg) {
  const galaryItemNew = galaryItem.cloneNode(true);
  const galaryTitle = galaryItemNew.querySelector('.galary__title');
  const galaryImage = galaryItemNew.querySelector('.galary__img');
  const galaryLike = galaryItemNew.querySelector('.galary__like');
  const galaryTrash = galaryItemNew.querySelector('.galary__delete-item');
  const galaryImageLink = galaryItemNew.querySelector('.galary__link-img');
  galaryTitle.textContent = cardTitle;
  galaryImage.src = cardImg;
  galaryImage.alt = 'фото ' + cardTitle;
  addElementInGalary(galaryItemNew);
  handleLikeButton(galaryLike);
  handleTrashButton(galaryTrash);
  handleOpenPopupImg(galaryImageLink);
  return galaryItemNew;
}

initialCards.forEach((item => {
  createCard(item.name, item.link);
}));

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  createCard(imgInput.value, imgInput.value);
  closePopup(popupAddCard);
}

formElementAddCard.addEventListener('submit', handleAddCardSubmit);

addCardBtn.addEventListener('click', openPopupAddCards);

formElementEdit.addEventListener('submit', handleProfileSubmit);

closeEditBtn.addEventListener('click', function () {
  closePopup(profilePopup);
})

editBtn.addEventListener('click', openPopupEdit);

closeAddCardBtn.addEventListener('click', function () {
  closePopup(popupAddCard);
});

closeImgBtn.addEventListener('click', function () {
  closePopup(imgPopup);
});