let currentIndex = 0
let characters = [];
fetch('./characters.json')
.then((result) => result.json())
.then((data) =>{
    characters =  data;
})

// Declare CHARACTER_LIST or import it properly
const CHARACTER_LIST = ["Character1", "Character2", "Character3"] // Example declaration

// Function to load characters from CHARACTER_LIST
function loadCharacters() {
  if (typeof CHARACTER_LIST !== "undefined") {
    characters = CHARACTER_LIST
    if (characters.length > 0) {
      displayCharacter()
    }
  }
}

// Function to display a random character
function displayRandomCharacter() {
  if (characters.length === 0) return

  currentIndex = Math.floor(Math.random() * characters.length)
  displayCharacter()
}

// Function to display the current character
function displayCharacter() {
  const display = document.getElementById("characterDisplay")
  const character = characters[currentIndex]

  if (character) {
    display.textContent = character
    display.style.animation = "none"
    // Restart the animation
    setTimeout(() => {
      display.style.animation = "fadeIn 0.5s ease-in-out"
    }, 10)
  }
}

// Event listener for space bar
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault()
    displayRandomCharacter()
  }
})

// Load characters when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", loadCharacters)
