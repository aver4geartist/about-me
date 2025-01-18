const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const playPauseImg = document.querySelector('#play-pause img');
const volumeSlider = document.getElementById('volume');
const seekSlider = document.getElementById('seek');
const timeDisplay = document.getElementById('time-display');

// Play/pause functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseImg.src = "pause-icon.png"; // Change to your pause icon
    } else {
        audio.pause();
        playPauseImg.src = "play-icon.png"; // Change to your play icon
    }
});

// Volume control
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Seek functionality
audio.addEventListener('timeupdate', () => {
    seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
    timeDisplay.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
});

seekSlider.addEventListener('input', () => {
    audio.currentTime = (seekSlider.value / 100) * audio.duration;
});

// Helper function to format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
}
