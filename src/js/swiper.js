const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let current = 0;
const visibleSlides = 8;

function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth;
    const offset = -(current * slideWidth);
    slider.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    current = Math.max(current - 1, 0);
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    current = Math.min(current + 1, slides.length - visibleSlides);
    updateSliderPosition();
});

window.addEventListener('resize', updateSliderPosition);
