let editBtn = document.querySelector('.profile__edit-btn');
let popupVisible = document.querySelector('.popup');
let closeBtn = document.querySelector('.popup__cross');





let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-text_name');
let jobInput = formElement.querySelector('.popup__form-text_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');

editBtn.onclick = function () {
  editBtn.onClick = popupVisible.classList.add('popup_visible_on');
  editBtn.onClick = popupVisible.classList.remove('popup_visible_off');
}

closeBtn.onclick =
  function () {
    closeBtn.onClick = popupVisible.classList.remove('popup_visible_on');
    closeBtn.onClick = popupVisible.classList.add('popup_visible_off');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);