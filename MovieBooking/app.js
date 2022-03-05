const movies = document.getElementById('movies');
const container = document.querySelector('.container');
const seatCount = document.getElementById('seat-count');
const price = document.getElementById('price');
let seatNum = 0;
let totalPrice = 0;

init();

function init() {
  movies.addEventListener('change', changeMovie);
  container.addEventListener('click', selectSeat);
}

function changeMovie() {
  // Reset seats and price
  seatNum = 0;
  totalPrice = 0;
  const selectedSeats = [...container.getElementsByClassName('selected')];
  selectedSeats.forEach(selectedSeat => {
    selectedSeat.classList.remove('selected');
  });
  bookingHandler();
}

function selectSeat(e) {
  // Pick empty seat
  if(e.target.classList.contains('seat')
  && !e.target.classList.contains('occupied')
  && !e.target.classList.contains('selected')) {
    e.target.classList.add('selected');
    // Update seat count
    seatNum += 1;
    // Update total price
    totalPrice += +movies.value;
  }
  // Pick selected seat
  else if(e.target.classList.contains('seat')
  && e.target.classList.contains('selected') 
  && !e.target.classList.contains('occupied')) {
    e.target.classList.remove('selected');
    // Update seat count
    seatNum -= 1;
    // Update total price
    totalPrice -= +movies.value;
  }

  bookingHandler();
}

// Handle total seats and price
function bookingHandler() {
  // Display seat counts
  seatCount.textContent = seatNum;
  // Display price
  price.textContent = totalPrice;
}

