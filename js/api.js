const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    });
};

const sendData = (onSuccess, onMessage, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onMessage('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onMessage('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
