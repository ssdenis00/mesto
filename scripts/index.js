const editBtn = document.querySelector('.profile__edit-btn');
const popupVisible = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__cross');
const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-text_input_name');
let jobInput = formElement.querySelector('.popup__form-text_input_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');

function popupVisibleOn() {
  popupVisible.classList.add('popup_visible-on');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function popupVisibleOff() {
  popupVisible.classList.remove('popup_visible-on');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupVisibleOff();
}

editBtn.addEventListener('click', popupVisibleOn);

closeBtn.addEventListener('click', popupVisibleOff);

formElement.addEventListener('submit', formSubmitHandler);