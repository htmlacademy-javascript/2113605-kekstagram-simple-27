const PHOTO_COUNT = 25;

const getRandomNumber = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number') {
    if (min < 0 || max < 0) {
      throw 'Введены некорректные значения';
    }
    return (min > max) ?
      Math.floor(max + Math.random() * (min + 1 - max)) :
      Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    throw 'Введены некорректные значения';
  }
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'Как уже неоднократно упомянуто, реплицированные с зарубежных источников.',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});

const getPhoto = () => (Array.from({
  length: PHOTO_COUNT
}, (_photo, indexPhoto) => createPhoto(indexPhoto + 1)));


checkStringLength('fsadgsdgs', 5);
getPhoto();
