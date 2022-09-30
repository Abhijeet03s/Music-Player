let player = document.getElementById("player")
let name = document.getElementById("name")
let songName = document.getElementById("song-name")
let artistName = document.getElementById("artist-name")
let control = document.getElementById("controls")
let shuffle = document.getElementById("shuffle")
let play = document.getElementById("play")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let audio = document.getElementById("audio-source")

let span = document.querySelector("span")

let progress = document.querySelector(".progress")
let currTime = document.querySelector(".current-time");
let totalTime = document.querySelector(".total-time");

// let volume = document.querySelector(".vol-slider");
// let vol = document.querySelector(".vol")
let volumeIcon = document.querySelector(".vol-icon");
let volumeSlider = document.querySelector(".vol-slider");
let volumeContainer = document.querySelector(".vol");
let volumeRange = document.querySelector(".vol-hidden");

const trackList = [
    {
        id: 1,
        name: "Baarishein",
        artist: "Anuv Jain",
        image: "./images/hey.jpg",
        path: "./music/Baarishein.mp3"
    },
    {
        id: 2,
        name: "Aaoge Tum Kabhi",
        artist: "The Local Train",
        image: "./images/summer.jpg",
        path: "./music/Aaoge Tum Kabhi.mp3"
    },
    {
        id: 3,
        name: "Ranjha",
        artist: "Shershaah",
        image: "./images/ukulele.jpg",
        path: "./music/Ranjha.mp3",
    }
]

let songIndex = Math.floor(Math.random() * trackList.length);
let isPlaying = false;
let setPosition;
let updateTimer;

let volumeIntail = 0;
let volumeIncrease, volumeDecrease;


loadSong(trackList[songIndex]);

function loadSong(trackList) {
    clearInterval(updateTimer);
    resetTime();
    audio.load();
    songName.innerText = trackList.name;
    artistName.innerText = trackList.artist;
    audio.src = trackList.path;
    updateTimer = setInterval(setUpdate, 1000);
    audio.addEventListener("ended", nextSong);
}

function resetTime() {
    currTime.innerText = "00:00";
    totalTime.innerText = "00:00";
    progress.value = 0;
}


function playPauseSong() {
    isPlaying ? pauseSong() : playSong();
}


// play song
play.addEventListener("click", playPauseSong)

function playSong() {
    // loadSong(trackList[songIndex]);
    audio.play();
    isPlaying = true;
    play.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>'
}


// pause song
function pauseSong() {
    audio.pause();
    isPlaying = false;
    play.innerHTML = ' <i class="fa-solid fa-play"></i>';
}


// next song
next.addEventListener("click", nextSong)

function nextSong() {
    songIndex++;
    if (songIndex > trackList.length - 1) {
        songIndex = 0;
    }
    loadSong(trackList[songIndex]);
    playSong();
}


// previous song
prev.addEventListener("click", prevSong);

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = trackList.length - 1;
    }
    loadSong(trackList[songIndex]);
    playSong();
}

// shuffle song
shuffle.addEventListener("click", shuffSong)

function shuffSong() {
    loadSong(trackList[Math.floor(Math.random() * trackList.length)]);
    // playSong();
    audio.play();
}


volumeContainer.addEventListener("click", toggleVolume);
function toggleVolume() {
    volumeRange.classList.toggle("hidden");
}


volumeSlider.addEventListener("change", calcSongVolume);
function calcSongVolume() {
    let audioVolume = audio.value = volumeSlider.value / 100;
    audio.volume = volumeSlider.value / 100;
    if (audioVolume > 0.4) {
        volumeIcon.innerHTML = '<i class="fa fa-volume-up"></i>';
    } else if (audioVolume < 0.2) {
        volumeIcon.innerHTML = '<i class="fa fa-volume-down"></i>'
    }
}



// // volume slider
// volume.addEventListener('change', () => {
//     audio.volume = volume.value
// })



//progress slider
progress.addEventListener('change', () => {
    audio.currentTime = audio.duration * (progress.value / 100);
})

function setUpdate() {
    let setPosition = 0;
    if (!isNaN(audio.duration)) {
        setPosition = audio.currentTime * (100 / audio.duration);
        progress.value = setPosition;

        let currentMinutes = Math.floor(audio.currentTime / 60);
        let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);

        let durationMinutes = Math.floor(audio.duration / 60);
        let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        currTime.innerText = currentMinutes + ":" + currentSeconds;
        totalTime.innerText = durationMinutes + ":" + durationSeconds;


    }
}


