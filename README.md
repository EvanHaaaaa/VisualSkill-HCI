# VisualSkill — Interactive Physics Learning Platform

A responsive, dark-cosmic-themed web application built as the **Human-Computer Interaction (HCI)** Final Project (**PPTI 24 — Evan Hermanto / 2902726486**).

**VisualSkill** (part of the *SkillSkill / SkillVerse* learning ecosystem) is an educational platform designed to make learning physics feel engaging, visual, and intuitive—featuring curated physics courses, career opportunities, company story/principles, and interactive registration/login flows.

---

## ✨ Features

- **Responsive Navigation & Mobile Menu**: Sticky navigation bar with hamburger toggle for mobile screens (`homescript.js`).
- **Landing & Home Page (`homepage.html`)**: Hero section, featured physics courses, promotional highlight, core learning principles, and career call-to-action.
- **Cosmic Course Library (`coursepage.html`)**: Showcases 6 physics topics:
  - Gravitational Forces
  - Impulse and Momentum
  - Thermodynamics
  - Quantum Mechanics
  - Electric Fields
  - Wave Phenomena
- **Careers & Interactive FAQ (`careerpage.html`)**: Open positions (Senior Full-Stack Developer, UX/UI Designer, Content Creator) and an accordion-style FAQ section (`careerscript.js`).
- **About Us (`aboutuspage.html`)**: Brand story, key stats, Vision & Mission, and core principles of the SkillSkill ecosystem.
- **Authentication Pages (`registerpage.html` & `loginpage.html`)**: Client-side form validation for registration (full name, date of birth, gender, email, numeric phone number, minimum address length) via `registerscript.js`.
- **Design System & Figma Prototype**: Includes the Figma source file (`SkillVerse.fig`) and color token reference (`design_system_color_tokens.html`).

---

## 🛠️ Tech Stack

- **HTML5** — Semantic multi-page structure
- **CSS3** — Custom styling, responsive layouts, and cosmic dark-mode palette
- **Vanilla JavaScript** — DOM interactions, FAQ accordion, and form validation
- **Font Awesome 6.5.1** — UI & social media icons (via CDN)

---

## 📁 Project Structure

```text
WebsiteHCI/
├── website/                    # Main web application
│   ├── index.html              # Entry point (redirects to homepage.html)
│   ├── homepage.html           # Landing / Home page
│   ├── coursepage.html         # Physics courses catalog
│   ├── careerpage.html         # Open positions & FAQ
│   ├── aboutuspage.html        # About SkillSkill & VisualSkill
│   ├── loginpage.html          # User login page
│   ├── registerpage.html       # User registration page with validation
│   ├── assets/                 # Optimized web images & logos
│   ├── js/
│   │   ├── homescript.js       # Mobile navbar toggle
│   │   ├── careerscript.js     # FAQ accordion behavior
│   │   └── registerscript.js   # Registration form validation
│   └── style/
│       ├── homestyle.css
│       ├── coursepage.css
│       ├── careerpage.css
│       ├── aboutuspage.css
│       └── registerstyle.css
├── design/                     # UI/UX design artifacts
│   ├── SkillVerse.fig          # Figma design file
│   ├── design_system_color_tokens.html
│   ├── ide.txt                 # Tagline & concept notes
│   └── images/                 # Raw/source illustration assets
├── docs/
│   └── references.docx         # Project references document
├── .gitignore
└── README.md
```

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/EvanHaaaaa/VisualSkill-HCI.git
   cd VisualSkill-HCI
   ```
2. Open `website/index.html` (or `website/homepage.html`) directly in your browser, **or** run a local static server:
   ```bash
   # Using VS Code Live Server, or Python:
   python -m http.server 8000 --directory website
   ```
   Then visit `http://localhost:8000`.

---

## 👤 Author

- **Evan Hermanto** (`2902726486` — PPTI 24)
