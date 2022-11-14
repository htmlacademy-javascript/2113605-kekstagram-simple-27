const getRandomNumber = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number') {
    if (min < 0 || max < 0) {
      throw 'Введены некорректные значения';
    }
    return (min > max) ?
      Math.floor(max + Math.random() * (min + 1 - max)) :
      Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    throw 'Введены некорректные значения';
  }
};

const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.lineHeight = '34px';
  alertContainer.style.textTransform = 'none';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};

const showAlert = (targetBlock) => {
  const alertContainer = document.querySelector(targetBlock);
  alertContainer.classList.remove('hidden');
};

const closeAlert = (targetBlock, targetButton) => {
  const alertContainer = document.querySelector(targetBlock);
  const alertButton = document.querySelector(targetButton);
  alertButton.addEventListener('click', () => {
    alertContainer.classList.add('hidden');
  }, { once: true });
};

const closeAlertOutside = (targetBlock) => {
  const alertContainer = document.querySelector(targetBlock);
  const blockInner = alertContainer.querySelector('div');
  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(blockInner);
    if (!withinBoundaries) {
      alertContainer.classList.add('hidden');
    }
  }, { once: true });
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomNumber,
  checkStringLength,
  isEscapeKey,
  showAlert,
  showErrorAlert,
  closeAlert,
  closeAlertOutside
};
