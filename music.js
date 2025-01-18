const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekSlider = document.getElementById('seek');
const timeDisplay = document.getElementById('time-display');

// Event listener to update the seek slider and time display
audio.addEventListener('timeupdate', () => {
    seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
});

// Event listener to change currentTime when seek slider is adjusted
seekSlider.addEventListener('input', () => {
    audio.currentTime = (seekSlider.value / 100) * audio.duration;
});

// Event listener to toggle play/pause when the button is clicked
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.src = "pause.png";
    } else {
        audio.pause();
        playPauseButton.src = "play.png";
    }
});

// Function to format time into MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
