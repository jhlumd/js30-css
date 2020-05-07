let countdownId;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

function startTimer(seconds) {
  clearInterval(countdownId);

  const now = Date.now();
  const then = now + seconds * 1000;
  const endTitle = displayEndTime(then);
  displayTimeLeft(seconds, endTitle);
  
  countdownId = setInterval(function() {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    
    if (secondsLeft < 0) {
      clearInterval(countdownId);
      return;
    }
    
    displayTimeLeft(secondsLeft, endTitle);
  }, 1000); 
}

function displayTimeLeft(seconds, titleDisplay) {
  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds / 60) % 60);
  let secs = seconds % 60; 
  mins = mins < 10 && hours > 0 ? "0" + mins : mins;
  hours = hours < 1 ? "" : hours + ":";
  secs = secs < 10 ? "0" + secs : secs;
  const display = `${hours}${mins}:${secs}`;
  timerDisplay.textContent = display;
  document.title = display + " - " + titleDisplay;
}

function displayEndTime(ms) {
  const end = new Date(ms);
  let hours = end.getHours();
  let mins = end.getMinutes();
  let ampm = hours < 12 ? "AM" : "PM";
  hours = hours > 12 ? hours - 12 : hours;
  mins = mins < 10 ? "0" + mins : mins;
  const display = `Be back at ${hours}:${mins} ${ampm}`;
  endTime.textContent = display;
  return display;
}

const controls = document.querySelector(".timer__controls");
const minuteInputForm = document.customForm;
const userInput = minuteInputForm.minutes;

function handleButtonClick(e) {
  const clickedElement = e.target;
  // if (clickedElement.tagName !== "BUTTON") return;
  if (!clickedElement.classList.contains("timer__button")) return;
  startTimer(clickedElement.dataset.time);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const input = userInput.value;
  minuteInputForm.reset();
  if (isNaN(input) || input === "") return;
  startTimer(Math.round(input * 60));
}

controls.addEventListener("click", handleButtonClick);
minuteInputForm.addEventListener("submit", handleFormSubmit);
