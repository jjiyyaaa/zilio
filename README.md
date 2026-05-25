# jjiyyaaa — Tropical Breeze Portfolio

Personal portfolio website of **Ghaziya Manna Putri Iwadani** — an Informatics student and aspiring full-stack developer. Built with a warm beach-inspired design to showcase projects, certificates, tech stack, and contact information in one interactive single-page experience.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## Live Demo

https://zilio.vercel.app/

---

## Features

- **Landing hero** — animated welcome screen before entering the main portfolio
- **Home** — role introduction, tech highlights, and social links
- **About** — profile photo, bio, downloadable CV, and stats (projects & certificates)
- **Portfolio** — project showcase with detail view, tech stack bars, and certificate gallery
- **Contact** — Formspree-powered contact form with email fallback
- **Responsive layout** — optimized for desktop and mobile
- **Scroll animations** — Intersection Observer–driven entrance effects and active nav tracking

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, JSX, CSS (custom properties & glassmorphism) |
| Tooling | Vite 8, ESLint |
| Icons | Lucide React |
| Contact | Formspree (with `mailto` fallback) |

---

## Project Structure

```
portfolio/
├── public/
│   └── assets/          # Profile photo, CV, project screenshots, certificates
├── src/
│   ├── components/      # UI sections (Home, About, Portfolio, Contact, etc.)
│   ├── data/
│   │   └── portfolioData.jsx   # Projects & certificates data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Global styles & design tokens
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/jjiyyaaa/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

Build output is written to the `dist/` folder.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Deployment

This project is a static React SPA and can be deployed to:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (with a small base-path config if needed)

After deploying, update the **Live Demo** link at the top of this README.

---

## Contact Form

The contact form uses [Formspree](https://formspree.io/). Submissions are forwarded to the portfolio owner's email. If Formspree is unavailable, the form falls back to opening the user's default mail client.

---

## Author

**Ghaziya Manna Putri Iwadani** (jjiyyaaa)

- GitHub: [@jjiyyaaa](https://github.com/jjiyyaaa)
- LinkedIn: [Ghaziya Manna Putri Iwadani](https://linkedin.com/in/Ghaziya-Manna-Putri-Iwadani)
- Email: jjiyyaa@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).
"# zilio" 
