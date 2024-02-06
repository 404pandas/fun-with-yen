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

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = { alignment: 'bottom' };
  var instances = M.Dropdown.init(elems, options);
});
