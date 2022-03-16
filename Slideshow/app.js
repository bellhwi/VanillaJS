let slideIndex = 1;

showSlides(slideIndex);

//  Next/previous controls
function moveSlides(n) {
  showSlides(slideIndex += n);
}

// Current image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dot');

  // Next/prev button controls from the start & end
  if (n > slides.length) { slideIndex = 1 }
  else if (n < 1) { slideIndex = slides.length }

  // Reset all slides display to 'none'
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Reset all dots to inactive
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  console.log(slideIndex);

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}