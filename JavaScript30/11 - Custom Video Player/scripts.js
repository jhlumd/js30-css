// Get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Functions
function togglePlay(e) {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton(e) {
  toggle.textContent = e.target.paused ? "►" : "❚❚";
}

function skip(e) {
  video.currentTime += parseFloat(e.target.dataset.skip);
  // console.log(video.currentTime);
}

function handleRangeUpdate(e) {
  const { name, value } = e.target;
  video[name] = value;
}

function handleProgress() {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);

let mousedown = false;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
