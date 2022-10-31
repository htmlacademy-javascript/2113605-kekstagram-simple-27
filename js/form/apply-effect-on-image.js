const imgPreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const applyEffectOnImage = () => {

  effectsList.addEventListener('click', (evt) => {
    if (imgPreview.classList.length > 1) {
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

export {applyEffectOnImage};
