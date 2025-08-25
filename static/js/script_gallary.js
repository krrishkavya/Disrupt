const images = [
  'images/gallery/DSC09542.JPG',
  'images/gallery/DSC09545.JPG',
  'images/gallery/DSC09546.JPG',
  'images/gallery/DSC09552.JPG',
  'images/gallery/DSC09557.JPG',
  'images/gallery/DSC09562.JPG',
  'images/gallery/DSC09567.JPG',
  'images/gallery/DSC09568.JPG',
  'images/gallery/DSC09590.JPG',
  'images/gallery/DSC09593.JPG'
];

const slider = document.getElementById('slider');
let current = 0;
let autoplayInterval = null;
const autoplayDelay = 5000;

let isAnimating = false;

// Inject slides
images.forEach((src) => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.style.backgroundImage = `url(${src})`;
  slider.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');
const total = slides.length;

function updateCarousel(effect) {
  if (isAnimating) return;
  isAnimating = true;

  let index = current + effect;
  current = (index + total) % total;

  slides.forEach((slide, i) => {
    slide.className = 'slide';
    const offset = (i - current + total) % total;
    if (offset === 0) slide.classList.add('center');
    else if (offset === 1) slide.classList.add('right-1');
    else if (offset === 2) slide.classList.add('right-2');
    else if (offset === 3) slide.classList.add('right-3');
    else if (offset === total - 1) slide.classList.add('left-1');
    else if (offset === total - 2) slide.classList.add('left-2');
    else if (offset === total - 3) slide.classList.add('left-3');
    else slide.classList.add('hidden');

    if (effect == 1 && offset === 3) slide.classList.add('no-ani');
    else if (effect == -1 && offset === total - 3) slide.classList.add('no-ani');
  });

  setTimeout(() => { isAnimating = false; }, 800);
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    updateCarousel(1);
  }, autoplayDelay);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

function restartAutoplay() {
  stopAutoplay();
  startAutoplay();
}

// Manual navigation
document.getElementById('prev').addEventListener('click', () => {
  updateCarousel(-1);
  restartAutoplay();
});

document.getElementById('next').addEventListener('click', () => {
  updateCarousel(1);
  restartAutoplay();
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    updateCarousel(-1);
    restartAutoplay();
  }
  if (e.key === 'ArrowRight') {
    updateCarousel(1);
    restartAutoplay();
  }
});

// Touch support
let startX = 0;
document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    updateCarousel(1);
    restartAutoplay();
  }
  if (endX - startX > 50) {
    updateCarousel(-1);
    restartAutoplay();
  }
});

// Initialize
updateCarousel(0);
startAutoplay();
