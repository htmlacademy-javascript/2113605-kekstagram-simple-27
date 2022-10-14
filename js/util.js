const getRandomNumber = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number') {
    if (min < 0 || max < 0) {
      throw 'Введены некорректные значения';
    }
    return (min > max)
      ? Math.floor(max + Math.random() * (min + 1 - max))
      : Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    throw 'Введены некорректные значения';
  }
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

export {getRandomNumber, checkStringLength};
