const audioPlayer = new Audio("https://streams.fluxfm.de/Chillhop/mp3-128/streams.fluxfm.de/");
audioPlayer.volume = 0.2;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playAudio() {
    if (document.visibilityState === 'visible') {
        audioPlayer.play();
    }
}

while (true) {
    playAudio();
    audioPlayer.play()
    await sleep(1000);
}
// This code is useless I decided not to use it.