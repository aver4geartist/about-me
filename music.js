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
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
    seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// seek functionality
seekSlider.addEventListener('input', () => {
    const seekTo = (seekSlider.value / 100) * audio.duration;
    audio.currentTime = seekTo;
});

// format time as mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// update duration display on metadata load
audio.addEventListener('loadedmetadata', () => {
    timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
});
