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

// document.addEventListener('DOMContentLoaded', () => {
//     const mainScreenshot = document.getElementById('main-screenshot');
//     const thumbnails = document.querySelectorAll('.thumbnail');
//     const arrowLeft = document.getElementById('arrow-left');
//     const arrowRight = document.getElementById('arrow-right');

//     const isValidPath = Array.from(thumbnails).every(thumbnail => 
//         thumbnail.src.includes('assets/pictures/section-2/')
//     );

//     if (!isValidPath) {
//         return;
//     }

//     let currentIndex = 0;

//     const updateMainScreenshot = (index) => {
//         mainScreenshot.src = thumbnails[index].src;
//     };

//     arrowLeft.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + thumbnails.length) < 0 ? thumbnails.length - 1 : (currentIndex - 1 + thumbnails.length) % thumbnails.length;
//         updateMainScreenshot(currentIndex);
//     });

//     arrowRight.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % thumbnails.length;
//         updateMainScreenshot(currentIndex);
//     });

//     thumbnails.forEach((thumbnail, index) => {
//         thumbnail.addEventListener('click', () => {
//             currentIndex = index;
//             updateMainScreenshot(currentIndex);
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const mainImage = document.getElementById('main-screenshot');
//     const thumbnails = document.querySelectorAll('.thumbnail');
//     const arrowLeft = document.getElementById('screenshot-arrow-left');
//     const arrowRight = document.getElementById('screenshot-arrow-right');

//     let currentIndex = 0;
//     const images = Array.from(thumbnails).map(thumbnail => thumbnail.getAttribute('src'));

//     function isValidImagePath(path) {
//         return path && path.startsWith('assets/pictures/section-2/');
//     }

//     thumbnails.forEach((thumbnail, index) => {
//         thumbnail.addEventListener('click', () => {
//             const imagePath = thumbnail.getAttribute('src');
//             if (isValidImagePath(imagePath)) {
//                 mainImage.src = imagePath;
//                 currentIndex = index;
//             }
//         });
//     });

//     arrowLeft.addEventListener('click', () => {
//         do {
//             currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//         } while (!isValidImagePath(images[currentIndex]));
//         mainImage.src = images[currentIndex];
//     });

//     arrowRight.addEventListener('click', () => {
//         do {
//             currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//         } while (!isValidImagePath(images[currentIndex]));
//         mainImage.src = images[currentIndex];
//     });

//     function moveRight() {
//         do {
//             currentIndex = (currentIndex + 1) % images.length;
//         } while (!isValidImagePath(images[currentIndex]));
//         mainImage.src = images[currentIndex];
//     }

//     function startAutoSlide() {
//         autoSlide = setInterval(moveRight, 5000);
//     }

//     function resetAutoSlide() {
//         clearInterval(autoSlide);
//         startAutoSlide();
//     }

//     startAutoSlide();
// });

document.addEventListener('DOMContentLoaded', () => {
    const mainScreenshot = document.getElementById('main-screenshot');
    const screenshotThumbnails = document.querySelectorAll('.image-selector .screenshot-image-thumbnail');
    const screenshotArrowLeft = document.getElementById('screenshot-arrow-left');
    const screenshotArrowRight = document.getElementById('screenshot-arrow-right');

    let currentScreenshotIndex = 0;
    const screenshots = [
        'assets/pictures/section-2/screenshot-0.png',
        'assets/pictures/section-2/screenshot-1.png',
        'assets/pictures/section-2/screenshot-2.png'
    ];

    function updateScreenshot() {
        mainScreenshot.src = screenshots[currentScreenshotIndex];
        screenshotThumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('active', index === currentScreenshotIndex);
        });
    }

    screenshotThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentScreenshotIndex = index;
            updateScreenshot();
            resetAutoSlide();
        });
    });

    screenshotArrowLeft.addEventListener('click', () => {
        currentScreenshotIndex = (currentScreenshotIndex > 0) ? currentScreenshotIndex - 1 : screenshots.length - 1;
        updateScreenshot();
        resetAutoSlide();
    });

    screenshotArrowRight.addEventListener('click', () => {
        currentScreenshotIndex = (currentScreenshotIndex < screenshots.length - 1) ? currentScreenshotIndex + 1 : 0;
        updateScreenshot();
        resetAutoSlide();
    });

    function moveRight() {
        currentScreenshotIndex = (currentScreenshotIndex + 1) % screenshots.length;
        updateScreenshot();
    }

    function startAutoSlide() {
        autoSlide = setInterval(moveRight, 7500);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    updateScreenshot();
    startAutoSlide();
});

/* Video player */

document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video');
    const videoThumbnails = document.querySelectorAll('.video-selector .video-selector-thumbnail');
    const videoArrowLeft = document.getElementById('video-arrow-left');
    const videoArrowRight = document.getElementById('video-arrow-right');
    const videoDots = document.querySelectorAll('.video-dot img');

    let currentVideoIndex = 0;
    const videos = [
        'assets/videos/section-3/video-0.mp4',
        'assets/videos/section-3/video-1.mp4',
        'assets/videos/section-3/video-2.mp4'
    ];

    function updateVideo() {
        mainVideo.src = videos[currentVideoIndex];
        videoDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentVideoIndex);
        });
        videoThumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('active', index === currentVideoIndex);
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

/* Video audio control */

document.addEventListener('DOMContentLoaded', () => {
    const muteButton = document.querySelector('.main-video-audio-control');
    const mainVideo = document.getElementById('main-video');

    muteButton.addEventListener('click', () => {
        if (mainVideo.muted) {
            mainVideo.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            mainVideo.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });
});

/* Dev Log last n posts */

fetch('https://blog.mozilla.org/wp-json/wp/v2/posts?per_page=3&_embed=true')
.then(response => response.json())
.then(posts => {
    let postsHtml = '';
    posts.forEach(post => {
        let featuredImage = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '';
        let postTitle = post.title.rendered.substring(0, 64) + (post.title.rendered.length > 64 ? '...' : '');
        let contentPreview = post.content.rendered.substring(0, 64) + (post.content.rendered.length > 64 ? '...' : '');

        postsHtml += `
            <div class="post">
                <div>${featuredImage ? `<img src="${featuredImage}" alt="${post.title.rendered}" class="featured-image" />` : ''}</div>
                <a href="${post.link}" class="post-title" target="_blank">${postTitle}</a>
                <div class="post-content">${contentPreview}</div>
                <div class="post-date">${new Date(post.date).toISOString().split('T')[0]}</div>
            </div>
        `;
    });
    document.querySelector('.dev-log').innerHTML = postsHtml;
})
.catch(error => {
    console.error('Error fetching posts:', error);
    document.querySelector('.dev-log').innerHTML = '<p>Failed to load posts.</p>';
});
