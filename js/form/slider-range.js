const uiSliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');

const Slider = {
  create: function (min, max, start, step, targetClass) {
    if (document.querySelector('.noUi-target')) {
      this.destroy();
    }
    noUiSlider.create(uiSliderElement, {
      range: {
        min: min,
        max: max,
      },
      start: start,
      step: step,
      connect: 'lower',
    });
    this.update(targetClass);
  },
  update: function (targetClass) {
    uiSliderElement.noUiSlider.on('update', () => {
      if(targetClass){
        switch (targetClass) {
          case 'effects__preview--chrome':
            imgPreview.style.filter = `grayscale(${uiSliderElement.noUiSlider.get()})`;
            break;
          case 'effects__preview--sepia':
            imgPreview.style.filter = `sepia(${uiSliderElement.noUiSlider.get()})`;
            break;
          case 'effects__preview--heat':
            imgPreview.style.filter = `brightness(${uiSliderElement.noUiSlider.get()})`;
            break;
          case 'effects__preview--marvin':
            imgPreview.style.filter = `invert(${uiSliderElement.noUiSlider.get()}%)`;
            break;
          case 'effects__preview--phobos':
            imgPreview.style.filter = `blur(${uiSliderElement.noUiSlider.get()}px)`;
            break;
          default:
            imgPreview.style.filter = 'none';
            break;
        }
      }
      effectValue.value = uiSliderElement.noUiSlider.get();
    });
  },
  destroy: function () {
    imgPreview.style.filter = 'none';
    uiSliderElement.noUiSlider.destroy();
  }
};

export {Slider};
