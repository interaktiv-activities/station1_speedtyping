//SOUNDS
var correctSound = new Audio()
correctSound.src = "SOUNDS/match.wav"

//OPENING TIMER
const countdownText = document.getElementById("countdown-text")
const openingCountdown = document.getElementById("opening-counter")

let countdownTime = 5
var countdownInterval = setInterval(function(){
  countdownTime--
  countdownText.innerHTML = countdownTime

  if (countdownTime == 0){
    startGame()
    clearInterval(countdownInterval)
  }
}, 1000)

// To change level
let time = 10
let score = 0
let isPlaying
let counter = 0

function startGame() {
  wordInput.classList.remove("hide")
  currentWord.classList.remove("hide")
  scoreDisplay.classList.remove("hide")
  timeDisplay.classList.remove("hide")
  instructions.classList.remove("hide")
  scoreText.classList.remove('hide')
  timerText.classList.remove('hide')
  titleImage.classList.remove('hide')
  container.classList.remove('hide')
  countdownText.classList.add('hide')
  openingCountdown.classList.add('hide')

  // Load word from array
  showWord(words)
  // Start matching on word input
  wordInput.addEventListener('input', startMatch)
  // Call countdown every second
  setInterval(countdown, 1000)
  // Check game status
  setInterval(checkStatus, 50)
}

// Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const instructions = document.getElementById('instructions')
const timerText = document.getElementById('timer-text')
const scoreText = document.getElementById('score-text')
const failMessage = document.getElementById('fail-msg')
const titleImage = document.getElementById('title-img')
const container = document.getElementById("container")
const passMessage = document.getElementById("pass-msg")
const menuButton = document.getElementById("menu-btn")

const words = [
  'Innovative',
  'Plight With The Poor',
  'Faith',
  'Zeal for Service',
  'Communion in Mission',
  'St. John Baptist De La Salle',
  'Live Jesus In Our Hearts',
  'Benildean',
  'Integrity'
];

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true
    time = 11;
    showWord(words)
    wordInput.value = ''
    score++
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0
  } else if( score === 9) {
    wordInput.classList.add("hide")
    currentWord.classList.add("hide")
    scoreDisplay.classList.add("hide")
    timeDisplay.classList.add("hide")
    instructions.classList.add("hide")
    scoreText.classList.add('hide')
    timerText.classList.add('hide')
    titleImage.classList.add('hide')
    container.classList.add('hide')
    menuButton.classList.remove('hide')
    passMessage.classList.remove('hide')
  } else {
    scoreDisplay.innerHTML = score
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    correctSound.play()
    counter++
    return true
  } else {
    return false
  }
}

// Pick & show random word
function showWord(words) {
  // Output random word
  currentWord.innerHTML = words[counter]
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    time--
    // Decrement
    if (score === 9){
      time++
    }
  } else if (time < 9) {
    // Game is over
    wordInput.classList.add("hide")
    currentWord.classList.add("hide")
    scoreDisplay.classList.add("hide")
    timeDisplay.classList.add("hide")
    instructions.classList.add("hide")
    scoreText.classList.add('hide')
    timerText.classList.add('hide')
    titleImage.classList.add('hide')
    failMessage.classList.remove('hide')
    container.classList.add('hide')
  }
  // Show time
  timeDisplay.innerHTML = time
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    score = -1
  }
}