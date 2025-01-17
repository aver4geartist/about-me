const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume');
const seekSlider = document.getElementById('seek');
const timeDisplay = document.getElementById('time-display');

// play/pause functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️'; // update to pause icon
    } else {
        audio.pause();
        playPauseButton.textContent = '▶️'; // update to play icon
    }
});

// volume control
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// update seek slider and time display
audio.addEventListener('timeupdate', () => {
    seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
});

// seek functionality
seekSlider.addEventListener('input', () => {
    audio.currentTime = (seekSlider.value / 100) * audio.duration;
});

// format time in mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
