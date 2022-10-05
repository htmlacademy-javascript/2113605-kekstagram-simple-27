const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw 'Введены некорректные значения';
  }
  let currentNumber;
  if (min > max) {
    currentNumber = max + Math.random() * (min + 1 - max);
  } else {
    currentNumber = min + Math.random() * (max + 1 - min);
  }
  return Math.floor(currentNumber);
};

const checkStringLength = (string, maxLength) => string.length > maxLength;

getRandomNumber(1, 10);
checkStringLength('string', 10);
