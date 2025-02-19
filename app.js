let ads = [
    "https://github.com/opws-1/audio-ads/blob/main/ad1.mp3",
    "https://github.com/opws-1/audio-ads/blob/main/ad1.mp3"
];

let adIndex = 0;
let adAudio = new Audio();

function startAds() {
    playAd();
    setInterval(playAd, 30000); // Play ad every 30 seconds
}

function playAd() {
    adAudio.src = ads[adIndex];
    adAudio.play();
    adAudio.onended = () => {
        adIndex = (adIndex + 1) % ads.length;
    };
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker Registered'))
        .catch(err => console.log('Service Worker Error:', err));
}
