const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
const easyReadToggle = document.getElementById("easy-read-toggle");

let isPlaying = false;
let easyReadOn = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = "🔇 Mute";
    isPlaying = true;
  } else {
    music.pause();
    toggleBtn.textContent = "🔊 Music";
    isPlaying = false;
  }
  localStorage.setItem("isPlaying", isPlaying);
});

easyReadToggle.addEventListener("click", () => {
  easyReadOn = !easyReadOn;
  if (easyReadOn) {
    document.body.style.fontFamily = "Arial, sans-serif";
    easyReadToggle.textContent = "📖 Easy Read: On";
  } else {
    document.body.style.fontFamily = "'Press Start 2P', cursive";
    easyReadToggle.textContent = "📖 Easy Read: Off";
  }
  localStorage.setItem("easyReadOn", easyReadOn);
});


window.addEventListener("DOMContentLoaded", () => {
  const savedMusic = localStorage.getItem("isPlaying");
  if (savedMusic === "true") {
    isPlaying = true;
    music.play();
    toggleBtn.textContent = "🔇 Mute";
  }

  const savedEasyRead = localStorage.getItem("easyReadOn");
  if (savedEasyRead === "true") {
    easyReadOn = true;
    document.body.style.fontFamily = "Arial, sans-serif";
    easyReadToggle.textContent = "📖 Easy Read: On";
  }
});