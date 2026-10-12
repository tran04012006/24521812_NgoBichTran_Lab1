const soundPaths = {
  kick: "./sounds/kick.mp3",
  snare: "./sounds/snare.mp3",
  hihat: "./sounds/hihat.mp3",
  clap: "./sounds/clap.mp3",
};

const soundTemplates = {};

for (const [name, path] of Object.entries(soundPaths)) {
  soundTemplates[name] = new Audio(path);
  soundTemplates[name].preload = "auto";
}

export function playSound(soundName) {
  const template = soundTemplates[soundName];

  if (!template) {
    console.warn(`Unknown sound: ${soundName}`);
    return;
  }
  //hỗ trợ polyphonic
  const sound = template.cloneNode(true);

  sound.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
}
