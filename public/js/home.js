function displaySelectedItemDetails(name, file_path) {
  // Get a reference to the selectedItemDetails div
  const selectedItemDetailsDiv = document.getElementById('selectedItemDetails');

  // Create HTML content with the selected item's details
  const detailsHTML = `
      <h5>Let's trace: ${name}!</h5>
      <img src=${file_path} id="current-trace"/>
    `;

  // Update the content of the div
  selectedItemDetailsDiv.innerHTML = detailsHTML;
}

function passClickedVariables(name, file_path) {
  const passedName = name;
  const passedFilePath = file_path;
  localStorage.setItem('passedName', passedName);
  localStorage.setItem('passedFilePath', passedFilePath);
  displaySelectedItemDetails(name, file_path);
}

document.addEventListener('DOMContentLoaded', function () {
  // Check if there are stored variables in localStorage
  const passedName = localStorage.getItem('passedName');
  const passedFilePath = localStorage.getItem('passedFilePath');

  // If both name and file_path are present, display the selected item's details
  if (passedName && passedFilePath) {
    displaySelectedItemDetails(passedName, passedFilePath);
    // Remove stored values after using them
    localStorage.removeItem('passedName');
    localStorage.removeItem('passedFilePath');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = { alignment: 'bottom' };
  var instances = M.Dropdown.init(elems, options);
});
