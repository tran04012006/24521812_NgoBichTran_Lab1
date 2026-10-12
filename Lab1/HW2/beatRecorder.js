
let beatQueue = [];
let recording = false;
let startTime = 0;

// Bắt đầu ghi
export function startRecording() {
  beatQueue = [];
  recording = true;
  startTime = performance.now();
}

// Ghi một nhịp trống
export function recordBeat(soundName) {
  if (!recording) return;

  const timestamp = performance.now() - startTime;

  beatQueue.push({
    sound: soundName,
    time: timestamp,
  });
}

// Dừng ghi
export function stopRecording() {
  recording = false;
  return [...beatQueue];
}

// Lấy các sự kiện đã ghi
export function getRecordedBeats() {
  return [...beatQueue];
}
