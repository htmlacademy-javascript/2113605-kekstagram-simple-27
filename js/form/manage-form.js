import { onEditModalControl, form } from './on-edit-modal-control.js';
import { manageImageSize } from './manage-image-size.js';
import { applyEffectOnImage } from './apply-effect-on-image.js';

const manageForm = () => {

  onEditModalControl();
  manageImageSize();
  applyEffectOnImage();

  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'img-upload__text-error',
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      // можно отправлять форму
    } else {
      // нельзя отправлять форму
    }
  });
};

export {manageForm};
