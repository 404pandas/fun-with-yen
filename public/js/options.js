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

// Modal Javascript
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  console.log('Modal initiated');
  console.log(elems);
  var instances = M.Dropdown.init(elems);
  console.log('Modal stuff and things');
  console.log(instances);
});

// Carousel Javascript
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  console.log('Carousel initiated');
  console.log(elems);
  var instances = M.Carousel.init(elems);
  console.log('Carousel stuff and things');
  console.log(instances);
});
