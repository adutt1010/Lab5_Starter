// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
    const hornImage = document.querySelector('img');
    const hornAudio = document.querySelector('audio');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const playButton = document.querySelector('button');
    const jsConfetti = new JSConfetti();

    hornSelect.addEventListener('change', (event) => {
        const hornType = event.target.value;
        hornImage.src = `./assets/images/${hornType}.svg`;
        hornImage.alt = hornType;
        hornAudio.src = `./assets/audio/${hornType}.mp3`;
    });

    volumeSlider.addEventListener('input', (event) => {
        const volume = event.target.value;
        hornAudio.volume = volume / 100; // Set volume (0 to 1)

        // Update volume icon
        if (volume == 0) {
            volumeIcon.src = './assets/icons/volume-level-0.svg';
        } else if (volume < 33) {
            volumeIcon.src = './assets/icons/volume-level-1.svg';
        } else if (volume < 67) {
            volumeIcon.src = './assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = './assets/icons/volume-level-3.svg';
        }
    });

    playButton.addEventListener('click', () => {
        hornAudio.play();

        // Confetti for Party Horn
        if (hornSelect.value === 'party-horn') {
            jsConfetti.addConfetti();
        }
    });
}