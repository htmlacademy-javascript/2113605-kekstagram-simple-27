const imgScale = document.querySelector('.img-upload__scale');
const scaleSmaller = imgScale.querySelector('.scale__control--smaller');
const scaleBigger = imgScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgScale.querySelector('.scale__control--value');
const blockImgPreview = document.querySelector('.img-upload__preview');

const manageImageSize = () => {

  const transformImages = (size) => {
    const currentSize = Number(size) / 100;
    blockImgPreview.style.transform = `scale(${currentSize})`;
  };

  const increaseSizeValue = () => {
    let sizeValue = Number.parseInt(scaleControlValue.value, 10);
    sizeValue = Math.min(sizeValue + 25, 100);
    scaleControlValue.value = `${sizeValue}%`;

    transformImages(sizeValue);
  };

  const decreaseImageSize = () => {
    let sizeValue = Number.parseInt(scaleControlValue.value, 10);
    sizeValue = Math.max(sizeValue - 25, 25);
    scaleControlValue.value = `${sizeValue}%`;

    transformImages(sizeValue);
  };

  scaleSmaller.addEventListener('click', decreaseImageSize);

  scaleBigger.addEventListener('click', increaseSizeValue);

};

export { manageImageSize };
