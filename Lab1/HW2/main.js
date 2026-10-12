import { playSound } from "./audioEngine.js";
import { startRecording, recordBeat, stopRecording } from "./beatRecorder.js";

document.addEventListener("keydown", (event) => {
  console.log("Key:", event.key);
  console.log("Repeat:", event.repeat);

  if (event.repeat) {
    return;
  }

  const key = event.key.toLowerCase();

  const button = Array.from(document.querySelectorAll("[data-key]")).find(
    (btn) => btn.dataset.key.toLowerCase() === key,
  );

  if (!button) return;

  const soundName = button.dataset.sound;

  console.log("Playing:", soundName);
  playSound(soundName);
  // M4: Ghi lại nhịp trống

  recordBeat(soundName);
});

// Kết nối các nút điều khiển
document
  .querySelector("#startRecording")
  .addEventListener("click", startRecording);

document.querySelector("#stopRecording").addEventListener("click", () => {
  const beats = stopRecording();
  console.table(beats);
});
