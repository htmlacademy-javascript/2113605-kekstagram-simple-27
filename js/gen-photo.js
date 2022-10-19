import { PHOTO_COUNT } from './data.js';
import { createPhoto } from './create-photo.js';

const genPhoto = () => Array.from({
  length: PHOTO_COUNT
}, (_photo, indexPhoto) => createPhoto(indexPhoto + 1));

export { genPhoto };
