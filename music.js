const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const playPauseIcon = document.getElementById('play-pause-icon');
const volumeSlider = document.getElementById('volume');

// play/pause functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseIcon.src = 'pause-icon.png'; // Switch to pause icon
    } else {
        audio.pause();
        playPauseIcon.src = 'play-icon.png'; // Switch back to play icon
    }
});

// volume control
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});
