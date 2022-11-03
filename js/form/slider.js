const uiSliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');

const Slider = {
  create: function (min, max, start, step, targetClass) {
    this.destroy();
    noUiSlider.create(uiSliderElement, {
      range: {
        min,
        max,
      },
      start,
      step,
      connect: 'lower',
    });
    this.update(targetClass);
  },
  update: (targetClass) => {
    uiSliderElement.noUiSlider.on('update', () => {
      const curentValueRange = uiSliderElement.noUiSlider.get();

      switch (targetClass) {
        case 'effects__preview--chrome':
          imgPreview.style.filter = `grayscale(${curentValueRange})`;
          break;
        case 'effects__preview--sepia':
          imgPreview.style.filter = `sepia(${curentValueRange})`;
          break;
        case 'effects__preview--heat':
          imgPreview.style.filter = `brightness(${curentValueRange})`;
          break;
        case 'effects__preview--marvin':
          imgPreview.style.filter = `invert(${curentValueRange}%)`;
          break;
        case 'effects__preview--phobos':
          imgPreview.style.filter = `blur(${curentValueRange}px)`;
          break;
        default:
          imgPreview.style.filter = 'none';
          break;
      }

      effectValue.value = uiSliderElement.noUiSlider.get();
    });
  },
  destroy: () => {
    if (document.querySelector('.noUi-target')) {
      uiSliderElement.noUiSlider.destroy();
    }
    imgPreview.style.filter = 'none';
  }
};

export {Slider};
