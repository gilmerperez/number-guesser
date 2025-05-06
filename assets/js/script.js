let guess;
let attempts = 0;
const minNum = 0;
const maxNum = 100;

const text = document.getElementById("text");
const input = document.getElementById("input");
document.getElementById("minNum").textContent = minNum;
document.getElementById("maxNum").textContent = maxNum;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

function submit() {
  guess = input.value;
  if (isNaN(guess)) {
    text.textContent = "ENTER A VALID NUMBER";
    text.classList.add("wrongText");
    input.value = "";
  } else if (guess < minNum || guess > maxNum) {
    text.textContent = "ENTER A NUMBER WITHIN THE RANGE";
    text.classList.add("wrongText");
    input.value = "";
  } else {
    attempts++;
    if (guess < randomNumber) {
      text.textContent = `TOO LOW! TRY AGAIN`;
      text.classList.add("wrongText");
      input.value = "";
    } else if (guess > randomNumber) {
      text.textContent = "TOO HIGH! TRY AGAIN";
      text.classList.add("wrongText");
      input.value = "";
    } else {
      text.textContent = `CORRECT! THE NUMBER WAS ${randomNumber}! IT TOOK YOU ${attempts} ATTEMPTS`;
      text.classList.add("correctText");
    }
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit();
  }
});
