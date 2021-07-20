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

