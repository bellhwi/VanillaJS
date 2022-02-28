const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPW = document.getElementById('confirmPW');
const submit = document.getElementById('submit');

// Validate all fields when submit
submit.addEventListener('click', validate);

function validate() {
  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPW();
}

// Validate username
function validateUsername() {
  // If username is shorter than 3
  if(username.value.length < 3) {
    username.className = 'input-error';
    username.nextElementSibling.className = 'show-error';
    username.nextElementSibling.textContent = 'Username must be at least 3 characters';
  } 
  // If username is longer than 15
  else if(username.value.length > 14) {
    username.nextElementSibling.className = 'show-error';
    username.nextElementSibling.textContent = 'Username must be less than 15 characters';
  } 
  // If username is valid
  else {
    username.className = 'input-success';
    username.nextElementSibling.classList.remove('show-error');
  }
}

// Validate email
function validateEmail() {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // Invalid email
  if(!email.value.match(emailFormat)) {
    email.className = 'input-error'
    email.nextElementSibling.className = 'show-error';
    email.nextElementSibling.textContent = 'Email is not valid';
  } else {
    email.className = 'input-success';
    email.nextElementSibling.classList.remove('show-error');
  }
}

// Validate password
function validatePassword() {
  // If password is shorter than 6
  if(password.value.length < 6) {
    password.className = 'input-error';
    password.nextElementSibling.className = 'show-error';
    password.nextElementSibling.textContent = 'Password must be at least 6 characters';
  } 
  // If password is longer than 25
  else if(password.value.length > 25) {
    password.className = 'input-error';
    password.nextElementSibling.className = 'show-error';
    password.nextElementSibling.textContent = 'Password must be less than 25 characters';
  } 
  // If password is valid
  else {
    password.className = 'input-success';
    password.nextElementSibling.classList.remove('show-error');
  }
}

function validateConfirmPW() {
  // Password not match
  if(confirmPW.value !== password.value && confirmPW.value !== '') {
    confirmPW.className = 'input-error';
    confirmPW.nextElementSibling.className = 'show-error';
    confirmPW.nextElementSibling.textContent = 'Password does not match';
  }
  // Password match
  else if(confirmPW.value === password.value && confirmPW.value !== '') {
    confirmPW.className = 'input-success';
    confirmPW.nextElementSibling.classList.remove('show-error');
  }
  else {
    confirmPW.className = 'input-error';
    confirmPW.nextElementSibling.className = 'show-error';
    confirmPW.nextElementSibling.textContent = 'Confirm password';  
  }
}
