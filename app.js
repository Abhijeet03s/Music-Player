let player = document.getElementById("player")
let name = document.getElementById("name")
let songName = document.getElementById("song-name")
let artistName = document.getElementById("artist-name")
let control = document.getElementById("controls")
let shuffle = document.getElementById("shuffle")
let play = document.getElementById("play")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let restart = document.getElementById("restart")
let audio = document.getElementById("audio-source")


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

let songIndex = 0;


loadSong(trackList[songIndex]);

function loadSong(trackList) {    
    songName.innerText = trackList.name;
    artistName.innerText = trackList.artist;
    audio.src = trackList.path;
}


// play song
play.addEventListener("click", playSong)

function playSong() {
    loadSong(trackList[songIndex]);
    audio.play();
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

// restart song
restart.addEventListener("click", resSong);

function resSong() {
    loadSong(trackList[songIndex]);
}

// shuffle song
shuffle.addEventListener("click", shuffSong)

function shuffSong() {
    loadSong(trackList[Math.floor(Math.random() * trackList.length)]);
    // playSong();
    audio.play();
}
