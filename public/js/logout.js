const logout = async () => {
  // post /api/users/logout
  // headers: application/json
  // redirect to '/'
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

// event listener for logout button
document.querySelector('#logout').addEventListener('click', logout);
