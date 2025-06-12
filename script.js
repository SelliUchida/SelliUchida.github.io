const carta = document.getElementById('carta');
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');

carta.addEventListener('click', () => {
  carta.classList.toggle('abrir');
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = "<i class='bx bx-pause'></i>";
  } else {
    audio.pause();
    playPauseBtn.innerHTML = "<i class='bx bx-play'></i>";
  }
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percent;

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Avançar e retroceder 10s
document.getElementById('backBtn').addEventListener('click', () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});
document.getElementById('forwardBtn').addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

document.querySelector('.carta').addEventListener('click', function () {
  this.classList.toggle('carta-aberta');
});
