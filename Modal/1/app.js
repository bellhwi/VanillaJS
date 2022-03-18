const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalBtn');
const clostBtn = document.getElementById('closeBtn');

// Click 'Open Modal' button
modalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
})

// Click 'Close Modal' button
clostBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
})

// Click window to close modal
window.onclick = e => {
  if(e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
}