const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw 'Введены некорректные значения';
  }
  return (min > max) ?
    Math.floor(max + Math.random() * (min + 1 - max)) :
    Math.floor(min + Math.random() * (max + 1 - min));
};

const checkStringLength = (string, maxLength) => string.length > maxLength;

getRandomNumber(1, 10);
checkStringLength('string', 10);
