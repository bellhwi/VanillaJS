function Movie(title, genre, year) {
  this.title = title;
  this.genre = genre;
  this.year = year;
}

// UI Constructor
function UI() {}

// Add Movie To List
UI.prototype.addMovieToList = function(movie){
  const list = document.getElementById('movie-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${movie.title}</td>
    <td>${movie.genre}</td>
    <td>${movie.year}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

// Delete Movie
UI.prototype.deleteMovie = function(target){
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
  console.log(target.parentElement.parentElement);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get form
  const form = document.querySelector('#form');
  // Insert alert
  form.insertBefore(div, form.children[0]);

  // Timeout after 3 sec
  setTimeout( () => {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('year').value = '';
}

// Event Listener for add movie
document.getElementById('submit').addEventListener('click', e => {
  // Get form values
  const title = document.getElementById('title').value,
        genre = document.getElementById('genre').value,
        year = document.getElementById('year').value;

  // Instantiate movie
  const movie = new Movie(title, genre, year);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || genre === '' || year === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add movie to list
    ui.addMovieToList(movie);

    // Show success
    ui.showAlert('Movie Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();

});

// Event Listener for delete
document.getElementById('movie-list').addEventListener('click', e => {

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteMovie(e.target);

  // Show message
  ui.showAlert('Movie Removed!', 'success');

  e.preventDefault();
});

