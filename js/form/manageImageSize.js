const imgScale = document.querySelector('.img-upload__scale');
const scaleSmaller = imgScale.querySelector('.scale__control--smaller');
const scaleBigger = imgScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgScale.querySelector('.scale__control--value');
const blockImgPreview = document.querySelector('.img-upload__preview');

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

export { manageImageSize };
