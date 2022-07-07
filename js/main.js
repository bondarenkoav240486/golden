//burger menu.............................................................................


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('header ul');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

// slider.................................................................................
const slides = document.querySelectorAll('ul.slider-track li');
const sliderLine = document.querySelector('ul.slider-track');
let count = 0;
let width;

function init() {
    width = document.querySelector('div.slider-list').offsetWidth;
    sliderLine.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider();
}
// setInterval(unit, 1000);
init();
window.addEventListener('resize', init);

document.querySelector('.slider-forward-btn').addEventListener('click', function() {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-back-btn').addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}