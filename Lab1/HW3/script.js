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

("use strict");

// SLICE 2: State-Machine Form

const FormState = Object.freeze({
  IDLE: "idle",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error",
});

const allowedTransitions = {
  idle: ["submitting"],
  submitting: ["success", "error"],
  success: ["idle"],
  error: ["submitting", "idle"],
};

let currentState = FormState.IDLE;

const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit-btn");
const formMessage = document.getElementById("form-message");

function transitionTo(nextState) {
  const allowed = allowedTransitions[currentState];

  if (!allowed.includes(nextState)) {
    throw new Error(`Invalid transition: ${currentState} -> ${nextState}`);
  }

  currentState = nextState;
  renderForm();
}

function renderForm() {
  submitBtn.disabled =
    currentState === FormState.SUBMITTING || currentState === FormState.SUCCESS;

  switch (currentState) {
    case FormState.IDLE:
      submitBtn.textContent = "Register Now";
      formMessage.textContent = "";
      break;

    case FormState.SUBMITTING:
      submitBtn.textContent = "Submitting...";
      formMessage.textContent = "Processing registration...";
      break;

    case FormState.SUCCESS:
      submitBtn.textContent = "Registered";
      formMessage.textContent = "Registration successful!";
      break;

    case FormState.ERROR:
      submitBtn.textContent = "Try Again";
      formMessage.textContent = "Registration failed.";
      break;
  }
}

function simulateRegistration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Demo: simulate a 70% success rate
      if (Math.random() < 0.7) {
        resolve({ message: "Registration successful" });
      } else {
        reject(new Error("Simulated server failure"));
      }
    }, 2000);
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  if (currentState !== FormState.IDLE && currentState !== FormState.ERROR) {
    return;
  }

  transitionTo(FormState.SUBMITTING);

  try {
    await simulateRegistration();
    transitionTo(FormState.SUCCESS);
  } catch (error) {
    console.error("Registration error:", error);
    transitionTo(FormState.ERROR);
  }
}

form.addEventListener("submit", handleSubmit);

renderForm();
