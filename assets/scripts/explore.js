// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
    const textArea = document.getElementById('text-to-speak');
    const speakButton = document.querySelector('button');
    const faceImage = document.querySelector('img');

    // Initialize the speech synthesis
    const synth = window.speechSynthesis;
    let voices = [];

    // Populate the voice dropdown
    function populateVoiceList() {
        voices = synth.getVoices();

        voices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = index;
            voiceSelect.appendChild(option);
        });
    }

    // Ensure voices are loaded (sometimes it loads asynchronously)
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Handle the "Press to Talk" button click
    speakButton.addEventListener('click', () => {
        const text = textArea.value.trim();

        // Check if there's text to speak
        if (text === '') return;

        // Prepare the speech utterance
        const utterance = new SpeechSynthesisUtterance(text);
        const selectedIndex = voiceSelect.value;
        utterance.voice = voices[selectedIndex];

        // Handle mouth open/close during speech
        utterance.onstart = () => {
            faceImage.src = 'assets/images/smiling-open.png';
        };

        utterance.onend = () => {
            faceImage.src = 'assets/images/smiling.png';
        };

        // Speak the text
        synth.speak(utterance);
    });
}