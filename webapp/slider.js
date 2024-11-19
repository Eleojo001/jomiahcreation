// const progressCircle = document.querySelector('.autoplay-progress svg');
// const progressContent = document.querySelector('.autoplay-progress span');

// const swiperEl = document.querySelector('swiper-container');
// swiperEl.addEventListener('autoplaytimeleft', (e) => {
//   const [swiper, time, progress] = e.detail;
//   progressCircle.style.setProperty('--progress', 1 - progress);
//   progressContent.textContent = `${Math.ceil(time / 5000)}s`;
// });
// Select DOM elements
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// Variables to track the current slide
// let currentIndex = 0;
// const totalSlides = slides.length;

// Function to update the slider position
// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// Event listener for the 'Next' button
// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
//   updateSliderPosition();
// });

// Event listener for the 'Previous' button
// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
//   updateSliderPosition();
// });

// Select DOM elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Variables to track the current slide
let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the slider position
function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  updateSliderPosition();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
  updateSliderPosition();
}

// Event listeners for buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Pause auto-slide on hover
slider.parentElement.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

// Resume auto-slide when hover ends
slider.parentElement.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextSlide, 3000);
});

