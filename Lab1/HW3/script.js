"use strict";

const EVENT_DATE = "2026-12-25T13:00:00Z";

const targetTime = Date.parse(EVENT_DATE);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const statusEl = document.getElementById("event-status");

// kiem tra event date
if (Number.isNaN(targetTime)) {
  throw new Error("Invalid event date");
}

let intervalId = null;

function updateCountdown() {
  const now = Date.now();

  // tinh tgian con lai
  const remaining = Math.max(0, targetTime - now);

  const totalSeconds = Math.ceil(remaining / 1000);

  // doi sang ngay, gio, phut, giay
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  if (remaining === 0) {
    statusEl.textContent = "The event has started!";

    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
}

updateCountdown();

if (Date.now() < targetTime) {
  intervalId = setInterval(updateCountdown, 1000);
}

window.addEventListener("pagehide", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
