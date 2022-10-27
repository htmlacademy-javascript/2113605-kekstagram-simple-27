import {
  isEscapeKey
} from './util.js';

// переменные для функционала закрыть\открыть
const form = document.querySelector('.img-upload__form');
const inputUploadFile = form.querySelector('#upload-file');
const imgOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('#upload-cancel');

// переменные для работы с размером изображения
const imgScale = document.querySelector('.img-upload__scale');
const scaleSmaller = imgScale.querySelector('.scale__control--smaller');
const scaleBigger = imgScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgScale.querySelector('.scale__control--value');
const blockImgPreview = document.querySelector('.img-upload__preview');


const imgPreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');


const onEditModalControl = () => {

  const onModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePhotoEditingWindow();
    }
  };

  function showPhotoEditingWindow() {
    imgOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function closePhotoEditingWindow() {
    imgOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  inputUploadFile.addEventListener('input', () => {
    showPhotoEditingWindow();
    document.addEventListener('keydown', onModalEscKeydown);
  });

  uploadCancel.addEventListener('click', () => {
    closePhotoEditingWindow();
    document.removeEventListener('keydown', onModalEscKeydown);
  });

};

const manageImageSize = () => {

  const transformImages = (size) => {
    if (size < 100 && size >= 25) {
      size = `0.${size}`;
    } else {
      size = 1;
    }

    blockImgPreview.style.transform = `scale(${size})`;
  };

  const biggerSizeValue = () => {
    let sizeValue = parseInt(scaleControlValue.value, 10);

    if (sizeValue < 100) {
      sizeValue += 25;
    }

    if (sizeValue > 100) {
      sizeValue = 100;
    }

    scaleControlValue.value = `${sizeValue} %`;

    transformImages(sizeValue);
  };

  const smallerImageSize = () => {
    let sizeValue = parseInt(scaleControlValue.value, 10);

    if (sizeValue >= 25) {
      sizeValue -= 25;
    }

    if (sizeValue < 25) {
      sizeValue = 25;
    }

    scaleControlValue.value = `${sizeValue} %`;

    transformImages(sizeValue);
  };

  scaleSmaller.addEventListener('click', () => {
    smallerImageSize();
  });

  scaleBigger.addEventListener('click', () => {
    biggerSizeValue();
  });

};

const applyEffectOnImage = () => {
  effectsList.addEventListener('click', (evt) => {
    if(imgPreview.classList.length > 1) {
      imgPreview.classList.remove(imgPreview.classList[0]);
    }

    const target = evt.target;
    let currentEffectClass = '';

    if (target.classList[1] !== 'visually-hidden') {
      currentEffectClass = target.classList[1];
    }

    imgPreview.classList.add(currentEffectClass);
  });
};

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

export {
  onEditModalControl,
  manageImageSize,
  applyEffectOnImage
};
