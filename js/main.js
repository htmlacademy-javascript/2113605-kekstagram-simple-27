const randomNumber = (min, max) => {
  let currentNumber;
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    currentNumber = max + Math.random() * (min + 1 - max);
  }
  currentNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(currentNumber);
};

const checkStringLength = (string, maxLength) => {
  if (string.length > maxLength) {
    return false;
  }
  return true;
};

randomNumber(1, 2);
checkStringLength('string', 10);
