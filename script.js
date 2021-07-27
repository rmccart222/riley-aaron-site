const musicContainer = document.querySelector('.musicContainer')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progressContainer')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song Titles
const songs = ['cold shakes', 'Rain', 'Vacant']

// Song Index
let songIndex = 0

// Initially Load Song info into DOM
loadSong(songs[songIndex])

// Update Song Details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `cover-art/${song}.jpg`
}

// Play and Pause functions
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

// Next and Previous song functions
function prevSong () {
    songIndex-- 

    if(songIndex < 0) {
        songIndex = songs.length - 1
    } 

    loadSong(songs[songIndex])

    playSong()
}

function nextSong () {
    songIndex++ 

    if(songIndex > songs.length - 1) {
        songIndex = 0
    } 

    loadSong(songs[songIndex])

    playSong()
}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
}) 

// Change songs
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)