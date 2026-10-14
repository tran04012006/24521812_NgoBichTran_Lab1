"use strict";
// SLICE 1: DRIFT-FREE COUNTDOWN ENGINE

const EVENT_DATE = "2026-12-25T13:00:00Z";

const targetTime = Date.parse(EVENT_DATE);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const eventStatusEl = document.getElementById("event-status");

if (Number.isNaN(targetTime)) {
  throw new Error("Invalid event date");
}

let countdownInterval = null;

function updateCountdown() {
  const now = Date.now();

  const remaining = Math.max(0, targetTime - now);

  const totalSeconds = Math.ceil(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  if (remaining === 0) {
    eventStatusEl.textContent = "The event has started!";

    stopCountdown();
  }
}

function stopCountdown() {
  if (countdownInterval !== null) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}

function startCountdown() {
  stopCountdown();

  updateCountdown();

  if (Date.now() < targetTime) {
    countdownInterval = setInterval(updateCountdown, 1000);
  }
}

startCountdown();

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    updateCountdown();
  }
});

window.addEventListener("pagehide", stopCountdown);

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    startCountdown();
  }
});

// SLICE 2: STATE-MACHINE FORM

const FormState = Object.freeze({
  IDLE: "idle",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error"
});

const allowedTransitions = {
  idle: ["submitting"],
  submitting: ["success", "error"],
  success: ["idle"],
  error: ["submitting", "idle"]
};

let currentState = FormState.IDLE;

const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit-btn");
const formMessage = document.getElementById("form-message");
const welcomeMessage = document.getElementById("welcome-message");

function transitionTo(nextState) {
  const allowed = allowedTransitions[currentState];

  if (!allowed.includes(nextState)) {
    throw new Error(
      `Invalid transition: ${currentState} -> ${nextState}`
    );
  }

  console.log(`${currentState} -> ${nextState}`);

  currentState = nextState;

  renderForm();
}

function renderForm() {
  submitBtn.disabled =
    currentState === FormState.SUBMITTING ||
    currentState === FormState.SUCCESS;

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
      formMessage.textContent =
        "Registration failed. Please try again.";
      break;
  }
}

// SLICE 3: DOUBLE-SUBMIT & INPUT SECURITY

function canSubmit() {
  return (
    currentState === FormState.IDLE ||
    currentState === FormState.ERROR
  );
}

function validateForm(fullName, email) {
  if (!fullName || !email) {
    return "Please fill in all fields.";
  }

  if (fullName.length > 100) {
    return "Full name is too long.";
  }

  if (email.length > 254) {
    return "Email is too long.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Invalid email address.";
  }

  return null;
}

function simulateRegistration() {
  console.count("Registration requests");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve({ success: true });
      } else {
        reject(new Error("Simulated server failure"));
      }
    }, 2000);
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  if (!canSubmit()) {
    console.warn("Duplicate submission blocked");
    return;
  }

  const fullName = document
    .getElementById("full-name")
    .value.trim();

  const email = document
    .getElementById("email")
    .value.trim();

  const validationError = validateForm(fullName, email);

  if (validationError) {
    formMessage.textContent = validationError;
    return;
  }

  transitionTo(FormState.SUBMITTING);

  welcomeMessage.textContent = "";

  try {
    await simulateRegistration();
    transitionTo(FormState.SUCCESS);

    welcomeMessage.textContent = `Welcome, ${fullName}!`;

  } catch (error) {
    console.error("Registration error:", error);

    transitionTo(FormState.ERROR);
  }
}

form.addEventListener("submit", handleSubmit);

renderForm();
