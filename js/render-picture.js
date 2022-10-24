import { genPhoto } from './gen-photo.js';

const renderPicture = () => {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const pictures = genPhoto();

  const pictureListElement = document.querySelector('.pictures');
  const picturesListFragment = document.createDocumentFragment();

  pictures.forEach(({
    url,
    likes,
    comments
  }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').setAttribute('src', url);
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;
    picturesListFragment.appendChild(picture);
  });

  pictureListElement.appendChild(picturesListFragment);
};

export {renderPicture};
