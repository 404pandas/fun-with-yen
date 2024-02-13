const addFavorite = async (id) => {
  shape_id = id;
  number_id = id;
  letter_id = id;
  await fetch(`/api/favorites`, {
    method: 'POST',
    body: JSON.stringify({
      shape_id,
      number_id,
      letter_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(document.location.reload())
    .catch((err) => console.log(err));
};

const removeFavorite = async (id) => {
  await fetch(`/api/favorites/${id}`, {
    method: `DELETE`,
  })
    .then((response) => response.json())
    .then(document.location.reload())
    .catch((err) => console.log(err));
};

const handleSaveFavorite = async (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();
  e.preventDefault();
  const number = e.currentTarget;
  const letter = e.currentTarget;
  const shape = e.currentTarget;
  const numberId = number.parentElement.getAttribute('data-id');
  const letterId = letter.parentElement.getAttribute('data-id');
  const shapeId = shape.parentElement.getAttribute('data-id');

  const response = await addFavorite(letterId, numberId, shapeId);

  console.log('Handle save favorite function is working!');
  console.log(response);

  return response;
};

const handleRemoveFavorite = async (e) => {
  e.stopPropagation();
  e.preventDefault();
  const number = e.currentTarget;
  const letter = e.currentTarget;
  const shape = e.currentTarget;
  const numberId = number.parentElement.getAttribute('data-id');
  const letterId = letter.parentElement.getAttribute('data-id');
  const shapeId = shape.parentElement.getAttribute('data-id');

  const response = await removeFavorite(letterId, numberId, shapeId);

  console.log('Handle remove favorite function is working!');
  console.log(response);

  return response;
};

// // TODO- add fav-button class to shapes, numbers, and letters
// const favBtn = document.querySelectorAll('#not-favorited');
// favBtn.forEach((btn) => btn.addEventListener('click', handleSaveFavorite));
// // TODO- add favorited-btn class to shapes, numbers, and letters
// const favoritedBtn = document.querySelectorAll('#has-favorited');
// favoritedBtn.forEach((btn) =>
//   btn.addEventListener('click', handleRemoveFavorite)
// );
