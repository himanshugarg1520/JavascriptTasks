const vedioItems = document.querySelectorAll('.vedioitem');
const vedioPlayer = document.getElementById('vedio-player');
const vedio = document.getElementById('vedio');
const videoSource = document.getElementById('videoSource');
const playButton = document.getElementById('play');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

let currentIndex = -1;

function loadVideo(src) {
    videoSource.src = src;
    vedio.load();
    vedio.play();
}

vedioItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        loadVideo(item.dataset.src);
    });
});

playButton.addEventListener('click', () => {
    if (vedio.paused) {
        vedio.play();
        playButton.textContent = "Pause";
    } else {
        vedio.pause();
        playButton.textContent = "Play";
    }
});

previousButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadVideo(vedioItems[currentIndex].dataset.src);
    }
});


nextButton.addEventListener('click', () => {
    if (currentIndex < vedioItems.length - 1) {
        currentIndex++;
        loadVideo(vedioItems[currentIndex].dataset.src);
    }
});


function loadVideo(src) {
    videoSource.src = src;
    vedio.load();
    vedio.play();
    document.getElementById('vedio-player').style.display = 'block'; // Show the video player
}
