const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekSlider = document.getElementById('seek');
const volumeSlider = document.getElementById('volume');
const timeDisplay = document.getElementById('time-display');

audio.addEventListener('timeupdate', () => {
    seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
});

seekSlider.addEventListener('input', () => {
    audio.currentTime = (seekSlider.value / 100) * audio.duration;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.src = "pause.png";
    } else {
        audio.pause();
        playPauseButton.src = "play.png";
    }
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
