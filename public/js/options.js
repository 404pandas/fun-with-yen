const viewLetters = async (id, favoriteData) => {
  await fetch(`/api/favorites/`, {
    method: 'GET',
    body: JSON.stringify({
      favoriteData,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(document.location.reload())
    .catch((err) => console.log(err));
};
