# Pranav Dawange — Personal Portfolio

An editorial, responsive, and high-performance personal portfolio website built for **Pranav Dawange** (B.Tech Computer Science and Engineering - Data Science, Vishwakarma Institute of Technology, Pune).

Designed with a warm cream, coffee, and caramel editorial aesthetic, featuring an illustrated developer avatar, verified project repositories, academic timeline, intellectual property milestones, open-source pull request records, and an interactive printable online resume.

---

## 🎨 Visual Identity & Color System

The portfolio implements an original warm editorial theme avoiding standard blue-dominant developer templates:

- **Background:** Warm Cream (`#F7F0E6` / Dark mode: `#1A1310`)
- **Main Text:** Espresso Brown (`#38271E` / Dark mode: `#F7EFE6`)
- **Secondary Text:** Warm Taupe (`#786458` / Dark mode: `#C4B2A5`)
- **Primary Accent:** Coffee Brown (`#82502F` / Dark mode: `#DF8954`)
- **Secondary Accent:** Caramel (`#BE8B60` / Dark mode: `#E2A877`)
- **Cards & Surfaces:** Soft Ivory (`#FFF9F1` / Dark mode: `#251D18`)
- **Borders & Dividers:** Muted Tan (`#E6DDD2` / Dark mode: `#382A22`)

Features a persistent light/dark mode switch that synchronizes with `localStorage` and system color schemes.

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository
git clone https://github.com/Pranav-Dawange/pranav-portfolio.git

# Navigate into project directory
cd pranav-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Production Build & Preview
```bash
# Typecheck and build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
Portfolio_New/
├── public/
│   ├── favicon.svg              # Custom PD monogram favicon in brand colors
│   ├── resume.pdf               # Authoritative PDF resume (viewable & downloadable)
│   └── images/
│       ├── pranav-avatar.png    # Transparent illustrated developer avatar
│       ├── pranav-avatar.jpg    # High-resolution original avatar
│       └── pranav-portrait.png  # Circular portrait photograph from resume
├── src/
│   ├── types/
│   │   └── index.ts             # TypeScript definitions for projects, skills, education, etc.
│   ├── data/
│   │   └── portfolioData.ts     # Authoritative resume content and verified project links
│   ├── components/
│   │   ├── Navbar.tsx           # Floating frosted pill navbar with active section indicators
│   │   ├── ThemeToggle.tsx      # Sun/Moon mode switcher with accessible SVGs
│   │   ├── Hero.tsx             # 2-column hero with floating avatar & technical interests strip
│   │   ├── About.tsx            # Arched portrait with rotating badge & academic timeline
│   │   ├── Projects.tsx         # Category filter tabs, project cards, and deep-dive modal
│   │   ├── Skills.tsx           # Categorized skill clouds with semantic CS categories
│   │   ├── Achievements.tsx     # Patent card, hackathon honors, open-source PRs & certificates
│   │   ├── ResumeSection.tsx    # Interactive resume preview with PDF actions & print support
│   │   ├── Contact.tsx          # Direct verified contacts, copy-to-clipboard & contact form
│   │   └── Footer.tsx           # Brand credits, back-to-top button & copyright
│   ├── styles/
│   │   ├── index.css            # Theme tokens, CSS reset, typography, and print styles
│   │   └── components.css       # Scoped component layouts, keyframe animations & media queries
│   ├── App.tsx                  # Root application component assembling sections
│   ├── main.tsx                 # React 19 mount point
│   └── vite-env.d.ts            # Vite client type references
├── index.html                   # Semantic HTML5 entry with metadata & Google Fonts
├── vite.config.ts               # Vite bundler configuration with React plugin
├── tsconfig.json                # TypeScript compiler configuration
└── package.json                 # Project dependencies & scripts
```

---

## 📄 Managing the Resume PDF

- The website includes both **View PDF**, **Download PDF**, and **Print Resume** functionality.
- The document served by default is located at `public/resume.pdf`.
- To update your resume in the future, simply drop your freshly exported PDF into `public/resume.pdf` without modifying any code.
- Clicking **Print Resume** uses `@media print` CSS rules to format the online resume cleanly on standard A4 or US Letter paper without navigation clutter.

---

## 🚢 Deployment Guide

### Deploying to GitHub Pages
1. In `vite.config.ts`, ensure `base: './'` is configured if deploying to a subpath repository:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: './',
   });
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the generated `dist/` directory using GitHub Actions or `gh-pages`:
   ```bash
   npx gh-pages -d dist
   ```

### Deploying to Vercel or Netlify
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework Preset: `Vite`

---

## 🔒 Verification & Compliance
- **No Private Keys / Secrets:** Pure static client-side bundle.
- **Accurate Project Data:** Links only to authentic, public GitHub repositories (`EDI-2`, `road-complaint-system`, `AgroSage_AI_Plus`, `transport-predictor-app`).
- **Clear Licensing & Attribution:** Case studies without public repositories (`UrbanLensAI`) are explicitly identified as private research prototypes.
- **Accessible & Responsive:** Meets WCAG color contrast standards, `:focus-visible` states, and supports `prefers-reduced-motion`.
