// HTML DOM Elements
const inputField = document.getElementById("inputField");
const submitBtn = document.getElementById("submitBtn");
const resultText = document.getElementById("resultText");
const minNumDisplay = document.getElementById("minNum");
const maxNumDisplay = document.getElementById("maxNum");

// Variables
let guess;
let attempts = 0;
const minNum = 0;
const maxNum = 100;

// Change HTML to match variable amount
minNumDisplay.textContent = minNum;
maxNumDisplay.textContent = maxNum;

// Get a random number
const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

function submit() {
  guess = inputField.value;
  if (isNaN(guess)) {
    resultText.textContent = "ENTER A VALID NUMBER";
    resultText.classList.remove("hidden");
    resultText.classList.add("wrongText");
    inputField.value = "";
  } else if (guess < minNum || guess > maxNum) {
    resultText.textContent = "ENTER A NUMBER WITHIN THE RANGE";
    resultText.classList.remove("hidden");
    resultText.classList.add("wrongText");
    inputField.value = "";
  } else {
    attempts++;
    if (guess < randomNumber) {
      resultText.textContent = `TOO LOW! TRY AGAIN`;
      resultText.classList.remove("hidden");
      resultText.classList.add("wrongText");
      inputField.value = "";
    } else if (guess > randomNumber) {
      resultText.textContent = "TOO HIGH! TRY AGAIN";
      resultText.classList.remove("hidden");
      resultText.classList.add("wrongText");
      inputField.value = "";
    } else {
      resultText.textContent = `CORRECT! THE NUMBER WAS ${randomNumber}! IT TOOK YOU ${attempts} ATTEMPTS`;
      resultText.classList.remove("hidden");
      resultText.classList.add("correctText");
    }
  }
}

// Listen for the "Enter" key on the inputField as well
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit();
  }
});

submitBtn.addEventListener("click", submit);
