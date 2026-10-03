# HW1 Task Decomposition

## Project
Production Portfolio

## Base Implementation

- Create semantic HTML structure
- Create responsive layout
- Add About section
- Add Skills section
- Add Projects section
- Add navigation
- Add theme toggle

---

## M1 - WCAG 2.2 AA Accessibility Audit

Tasks:

- Check semantic HTML
- Add header, nav, main, section, footer landmarks
- Check heading hierarchy
- Check color contrast
- Add alt text to images
- Add accessible labels to buttons
- Run accessibility audit

Expected commit:

fix(a11y): contrast & landmarks

---

## M2 - Keyboard Navigation / Focus Trap Audit

Tasks:

- Test navigation using Tab
- Test Shift + Tab
- Make interactive elements keyboard accessible
- Add visible focus styles
- Prevent keyboard traps
- Test theme toggle with keyboard

Expected commit:

fix(nav): keyboard trap prevention

---

## M3 - Strict CSP & Zero Inline Handlers

Tasks:

- Remove inline onclick handlers
- Move JavaScript into main.js
- Use addEventListener()
- Add Content Security Policy
- Verify no inline scripts

Expected commit:

fix(security): enforce CSP and remove inline handlers

---

## M4 - Lighthouse Performance Audit

Tasks:

- Optimize images
- Optimize SVG icons
- Add width and height to images
- Prevent layout shift
- Check LCP
- Check CLS
- Run Lighthouse
- Reach required audit score

Expected commit:

perf: optimize assets

HW1 Production Portfolio
│
├── Base Website
│   ├── HTML structure
│   ├── Navigation
│   ├── About
│   ├── Skills
│   ├── Projects
│   └── Theme toggle
│
├── M1 Accessibility
│   ├── Semantic landmarks
│   ├── Heading hierarchy
│   ├── Color contrast
│   ├── Alt text
│   └── WCAG audit
│
├── M2 Keyboard Navigation
│   ├── Tab navigation
│   ├── Shift + Tab
│   ├── Focus indicator
│   ├── Button keyboard support
│   └── Focus trap test
│
├── M3 Security
│   ├── Remove onclick
│   ├── addEventListener
│   ├── Separate JS
│   └── CSP
│
└── M4 Performance
    ├── Optimize images
    ├── Image dimensions
    ├── LCP
    ├── CLS
    └── Lighthouse