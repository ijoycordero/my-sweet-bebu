let current = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(step) {
  slides[current].classList.remove('active');
  current = (current + step + slides.length) % slides.length;
  slides[current].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  slides[current].classList.add('active');
});
