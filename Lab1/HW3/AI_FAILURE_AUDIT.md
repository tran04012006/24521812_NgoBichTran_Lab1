# AI FAILURE AUDIT REPORT

## Defect 1: Countdown Timer Drift

## 1. Defect Description

The AI-generated countdown implementation decreased the remaining time by one second on each `setInterval()` callback. This approach assumed that the callback would always execute every 1000 milliseconds.

When the browser delayed callbacks, the displayed countdown became inaccurate.

## 2. Diagnostic Method

- Reviewed the countdown implementation.
- Used Chrome DevTools to inspect timer execution.
- Tested the countdown while switching browser tabs.
- Compared the displayed remaining time with the actual remaining duration.

## 3. Refactored Solution

Replaced incremental countdown logic with a timestamp-based calculation using `Date.now()`.

The remaining duration is recalculated during every update.

## Defect 2: Duplicate Form Submissions

## 1. Defect Description

The AI-generated submit handler did not adequately prevent multiple submissions while an asynchronous operation was in progress.

This could result in duplicate registration attempts.

## 2. Diagnostic Method

- Reviewed the form submission handler.
- Used `console.count()` to track registration attempts.
- Submitted the form repeatedly before the first operation completed.

## 3. Refactored Solution

Added a submission-state guard and disabled the submit button while the form was in the `submitting` state.

The state is updated before awaiting the asynchronous operation.

## Defect 3: Unsafe innerHTML Rendering

## 1. Defect Description

The AI-generated code inserted untrusted user input into the page using `innerHTML`, potentially allowing Cross-Site Scripting (XSS).

## 2. Diagnostic Method

- Inspected the code for unsafe DOM operations.
- Tested the input field using an HTML payload with an event handler.
- Observed whether the browser interpreted user input as HTML.

## 3. Refactored Solution

Replaced unsafe `innerHTML` usage with `textContent` when displaying user-provided text.

