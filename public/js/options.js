const viewLetters = async (id, letterData) => {
  await fetch(`/api/letters/`, {
    method: 'GET',
    body: JSON.stringify({
      letterData,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(document.location.reload())
    .catch((err) => console.log(err));
};

const viewNumbers = async (id, numberData) => {
  await fetch(`/api/numbers/`, {
    method: 'GET',
    body: JSON.stringify({
      numberData,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(document.location.reload())
    .catch((err) => console.log(err));
};

const viewShapes = async (id, shapeData) => {
  await fetch(`/api/shapes/`, {
    method: 'GET',
    body: JSON.stringify({
      shapeData,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(document.location.reload())
    .catch((err) => console.log(err));
};
