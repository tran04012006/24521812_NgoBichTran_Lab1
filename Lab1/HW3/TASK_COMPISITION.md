
HW3 - Resilient Event Hub & AI Failure Audit
│
├── 1. Project Setup
│   ├── 1.1. Initialize Git Repository
│   ├── 1.2. Create Project Structure
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── 1.3. Create Landing Page Layout
│   └── 1.4. Test HTML and CSS
│
├── 2. SLICE 1 - Drift-Free Countdown Engine
│   │
│   ├── 2.1. Create Countdown UI
│   │   ├── Display Days
│   │   ├── Display Hours
│   │   ├── Display Minutes
│   │   └── Display Seconds
│   │
│   ├── 2.2. Implement Countdown Logic
│   │   ├── Define UTC ISO 8601 Timestamp
│   │   ├── Convert Timestamp to Milliseconds
│   │   ├── Get Current Time Using Date.now()
│   │   ├── Calculate Remaining Time
│   │   └── Convert Remaining Time to D/H/M/S
│   │
│   ├── 2.3. Implement Timer Updates
│   │   ├── Update UI Using setInterval()
│   │   ├── Prevent Timer Drift
│   │   ├── Stop Timer at Zero
│   │   └── Cleanup Using clearInterval()
│   │
│   ├── 2.4. Test Countdown
│   │   ├── Test Normal Countdown
│   │   ├── Test Background Tab
│   │   ├── Test Timezone Changes
│   │   └── Test Event Expiration
│   │
│   └── 2.5. Git Commit - Slice 1
│
├── 3. SLICE 2 - State-Machine Form
│   │
│   ├── 3.1. Create Registration Form
│   │   ├── Full Name Input
│   │   ├── Email Input
│   │   ├── Submit Button
│   │   └── Status Message
│   │
│   ├── 3.2. Define Form States
│   │   ├── Idle
│   │   ├── Submitting
│   │   ├── Success
│   │   └── Error
│   │
│   ├── 3.3. Implement State Machine
│   │   ├── Define Allowed Transitions
│   │   ├── Create transitionTo()
│   │   ├── Validate State Transitions
│   │   └── Create renderForm()
│   │
│   ├── 3.4. Handle Form Submission
│   │   ├── Listen for Submit Event
│   │   ├── Prevent Default Submission
│   │   ├── Set Submitting State
│   │   ├── Simulate Async Request
│   │   ├── Handle Success
│   │   └── Handle Error
│   │
│   ├── 3.5. Test State Machine
│   │   ├── Idle -> Submitting
│   │   ├── Submitting -> Success
│   │   ├── Submitting -> Error
│   │   ├── Error -> Submitting
│   │   └── Reject Invalid Transitions
│   │
│   └── 3.6. Git Commit - Slice 2
│
├── 4. SLICE 3 - Form Security
│   │
│   ├── 4.1. Double-Submit Prevention
│   │   ├── Disable Button While Submitting
│   │   ├── Create canSubmit()
│   │   ├── Block Duplicate Submissions
│   │   └── Allow Retry After Error
│   │
│   ├── 4.2. Input Validation
│   │   ├── Check Required Fields
│   │   ├── Validate Email Format
│   │   ├── Validate Input Length
│   │   └── Normalize Input Using trim()
│   │
│   ├── 4.3. XSS Prevention
│   │   ├── Identify Unsafe innerHTML Usage
│   │   ├── Use textContent for User Data
│   │   ├── Avoid Unsafe HTML Injection
│   │   └── Review Untrusted Data Outputs
│   │
│   ├── 4.4. Security Testing
│   │   ├── Test Rapid Submit Clicks
│   │   ├── Test Duplicate Submit Events
│   │   ├── Test Invalid Inputs
│   │   ├── Test XSS Payloads
│   │   └── Verify Safe Output Rendering
│   │
│   ├── 4.5. Git Commit - Double Submit
│   └── 4.6. Git Commit - Input Security
│
├── 5. Mandatory AI Failure Mode Report (15%)
│   │
│   ├── 5.1. Create AI_FAILURE_AUDIT.md
│   │
│   ├── 5.2. Identify 3 Real AI-Induced Defects
│   │   │
│   │   ├── Defect 1
│   │   │   ├── Defect Description
│   │   │   ├── Diagnostic Method
│   │   │   ├── Refactored Solution
│   │   │   └── Verification Evidence
│   │   │
│   │   ├── Defect 2
│   │   │   ├── Defect Description
│   │   │   ├── Diagnostic Method
│   │   │   ├── Refactored Solution
│   │   │   └── Verification Evidence
│   │   │
│   │   └── Defect 3
│   │       ├── Defect Description
│   │       ├── Diagnostic Method
│   │       ├── Refactored Solution
│   │       └── Verification Evidence
│   │
│   ├── 5.3. Collect Evidence
│   │   ├── Inspect Git Diff
│   │   ├── Use Chrome DevTools
│   │   ├── Capture Screenshots
│   │   └── Record Test Results
│   │
│   └── 5.4. Git Commit - AI Audit Report
│
├── 6. Git Audit
│   ├── 6.1. Minimum 5 Atomic Commits
│   ├── 6.2. Verify Commit History
│   ├── 6.3. Check Git Diff
│   └── 6.4. Push Repository to GitHub
│
└── 7. Final Testing & Live Defense
    ├── 7.1. Test All 3 Slices
    ├── 7.2. Check Browser Console
    ├── 7.3. Verify Countdown Accuracy
    ├── 7.4. Verify Form State Transitions
    ├── 7.5. Verify Double-Submit Protection
    ├── 7.6. Verify XSS Protection
    ├── 7.7. Explain JavaScript Logic
    ├── 7.8. Explain Git Commit History
    └── 7.9. Review AI_FAILURE_AUDIT.md
