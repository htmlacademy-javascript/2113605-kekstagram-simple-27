import {onEditModalControl, form} from './on-edit-modal-control.js';
import {manageImageSize} from './manage-image-size.js';
import { applyEffectOnImage} from './apply-effect-on-image.js';
import {sendData} from '../api.js';
import {showAlert, closeAlert, closeAlertOutside} from '../util.js';

const submitButton = document.querySelector('.img-upload__submit');

onEditModalControl();
manageImageSize();
applyEffectOnImage();

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showAlert('.success');
          closeAlert('.success', '.success__button');
          closeAlertOutside('.success');
        },
        () => {
          showAlert('.error', closeAlert('.error', '.error__button'));
          unblockSubmitButton();
          closeAlert('.error', '.error__button');
          closeAlertOutside('.error');
        },
        new FormData(evt.target),
      );
    }
  });
};

export {
  setUserFormSubmit
};
