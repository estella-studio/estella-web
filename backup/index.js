function toggleMenu()
{
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }
}

const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 1;
let autoSlide;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('prev', 'current', 'next', 'hidden');

        if (index === currentIndex) {
            slide.classList.add('current');
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add('next');
        } else {
            slide.classList.add('hidden');
        }
    });
}
        
function moveLeft() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
    resetAutoSlide();
}
        
function moveRight() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
    resetAutoSlide();
}
        
function startAutoSlide() {
    autoSlide = setInterval(moveRight, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}
        
leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

updateSlides();
startAutoSlide();

function changeVideo(videoUrl)
{
    const iframe = document.querySelector('.youtube-video iframe');
    iframe.src = videoUrl;
}

let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');

function scrollToPage(index) {
    if (index >= 0 && index < pages.length) {
        pages[index].scrollIntoView({ behavior: 'smooth' });
        currentPageIndex = index;
    }
}

function handleScroll(event) {
    if (event.deltaY > 0) {
        scrollToPage(currentPageIndex + 1);
    } else {
        scrollToPage(currentPageIndex - 1);
    }
}

window.addEventListener('wheel', handleScroll);