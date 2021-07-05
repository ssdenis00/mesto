export const renderLoading = (value, form) => {
  const btn = form.querySelector('.popup__btn');
  if (value) {
    btn.textContent = 'Сохранение...';
  } else {
    btn.textContent = 'Сохранить';
  }
}