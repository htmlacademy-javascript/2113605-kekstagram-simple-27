const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then(onSuccess);
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
      }
      throw new Error('Невозможно отправить форму! Попробуйте ещё раз.');
    })
    .catch((error) => {
      onMessage(error.message);
    });
};

export {getData, sendData};
