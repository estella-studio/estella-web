/* Screenshot */

// const slides = document.querySelectorAll('.slide');
// const leftArrow = document.querySelector('.arrow.left');
// const rightArrow = document.querySelector('.arrow.right');
// let currentIndex = 1;
// let autoSlide;

// function updateSlides() {
//     slides.forEach((slide, index) => {
//         slide.classList.remove('prev', 'current', 'next', 'hidden');

//         if (index === currentIndex) {
//             slide.classList.add('current');
//         } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
//             slide.classList.add('prev');
//         } else if (index === (currentIndex + 1) % slides.length) {
//             slide.classList.add('next');
//         } else {
//             slide.classList.add('hidden');
//         }
//     });
// }

// function moveLeft() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateSlides();
//     resetAutoSlide();
// }

// function moveRight() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateSlides();
//     resetAutoSlide();
// }

// function startAutoSlide() {
//     autoSlide = setInterval(moveRight, 5000);
// }

// function resetAutoSlide() {
//     clearInterval(autoSlide);
//     startAutoSlide();
// }

// leftArrow.addEventListener('click', moveLeft);
// rightArrow.addEventListener('click', moveRight);

// updateSlides();
// startAutoSlide();

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    let currentIndex = 0;
    const images = Array.from(thumbnails).map(thumbnail => thumbnail.getAttribute('data-image'));

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.getAttribute('data-image');
            currentIndex = index;
        });
    });

    arrowLeft.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        mainImage.src = images[currentIndex];
    });

    arrowRight.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        mainImage.src = images[currentIndex];
    });

    function moveRight() {
        currentIndex = (currentIndex + 1) % images.length;
        mainImage.src = images[currentIndex];
    }

    function startAutoSlide() {
        autoSlide = setInterval(moveRight, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide();
});

/* Video player */

document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video');
    const videoThumbnails = document.querySelectorAll('.video-selector .thumbnail');
    const videoArrowLeft = document.getElementById('video-arrow-left');
    const videoArrowRight = document.getElementById('video-arrow-right');
    const videoDots = document.querySelectorAll('.video-indicator .dot');

    let currentVideoIndex = 0;
    const videos = Array.from(videoThumbnails).map(thumbnail => thumbnail.getAttribute('data-video'));

    function updateVideo() {
        mainVideo.src = videos[currentVideoIndex];
        videoDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentVideoIndex);
        });
    }

    videoThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentVideoIndex = index;
            updateVideo();
        });
    });

    videoArrowLeft.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex > 0) ? currentVideoIndex - 1 : videos.length - 1;
        updateVideo();
    });

    videoArrowRight.addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex < videos.length - 1) ? currentVideoIndex + 1 : 0;
        updateVideo();
    });

    updateVideo();
});
