import {
  isEscapeKey,
} from '../util.js';
import {
  Slider
} from './slider.js';

const form = document.querySelector('.img-upload__form');
const inputUploadFile = form.querySelector('#upload-file');
const imgOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('#upload-cancel');
const imgPreview = document.querySelector('.img-upload__preview img');
const blockImgPreview = document.querySelector('.img-upload__preview');

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

  inputUploadFile.addEventListener('input', () => {
    showPhotoEditingWindow();
    document.addEventListener('keydown', onModalEscKeydown);
  });

  uploadCancel.addEventListener('click', () => {
    closePhotoEditingWindow();
    document.removeEventListener('keydown', onModalEscKeydown);
  });

};

function closePhotoEditingWindow() {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  imgPreview.className = '';
  blockImgPreview.style.transform = 'scale(1)';
  Slider.destroy();
}

export {
  form,
  closePhotoEditingWindow,
  onEditModalControl
};
