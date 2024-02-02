// login form handler
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Will need to grab username and password from the form
  const username = document.querySelector('#un-login').value.trim();
  const password = document.querySelector('#pw-login').value.trim();

  // fetch POST api/users/login w/ body containing username and password stringified
  // headers w/ applicatin/json
  // replace document.location with '/'
  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

// event listener for login form submit
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
