import {Slider} from './slider.js';
const imgPreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const applyEffectOnImage = () => {
  effectsList.addEventListener('click', (evt) => {
    if (imgPreview.classList.length > 1) {
      imgPreview.classList.remove(imgPreview.classList[0]);
    }

    const target = evt.target;

    if (!(target.classList.contains('visually-hidden'))) {
      const currentEffectClass = target.classList[1];
      imgPreview.classList.add(currentEffectClass);

      switch (currentEffectClass) {
        case 'effects__preview--chrome':
        case 'effects__preview--sepia':
          Slider.create(0, 1, 1, 0.1, currentEffectClass);
          break;
        case 'effects__preview--heat':
          Slider.create(1, 3, 3, 0.1, currentEffectClass);
          break;
        case 'effects__preview--marvin':
          Slider.create(0, 100, 100, 1, currentEffectClass);
          break;
        case 'effects__preview--phobos':
          Slider.create(0, 3, 3, 0.1, currentEffectClass);
          break;
        default:
          Slider.destroy();
          break;
      }
    }
  });
};

export {applyEffectOnImage};
