import {renderPicture} from './render-picture.js';
import {PHOTO_COUNT} from './data.js';
import {getData} from './api.js';
import {closePhotoEditingWindow} from './form/on-edit-modal-control.js';
import {setUserFormSubmit} from './form/manage-form.js';

getData((pictures) => {
  renderPicture(pictures.slice(0, PHOTO_COUNT));
});

setUserFormSubmit(closePhotoEditingWindow);

