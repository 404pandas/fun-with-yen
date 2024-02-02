// form handler for signup form
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Will need to grab username and password from the form
  const username = document.querySelector('#un-signup').value.trim();

  const password = document.querySelector('#pw-signup').value.trim();
  // verify pass len >= 8 and username
  // fetch POST api/users w/ body containing username and password stringified
  // headers w/ application/json
  // replace document.location with '/'
  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      // visual feedback for username or pass error

      alert('Failed to sign up.');
    }
  } else {
    alert('Please include both a username and password.');
  }
};

// event listener for signup form submit
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
