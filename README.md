# Chandanshiv Cement Products

A responsive, animated **React + Vite** business web application for Chandanshiv Cement Products, designed around a warm beige architectural visual system.

> **Stronger foundations. Better tomorrow.**

## ✨ What is included

- React-based component architecture
- Six routed screens: Home, About Us, Products, Services, Inquiry, Contact
- Responsive desktop/tablet/mobile navigation
- Adaptive full-width mobile buttons
- Animated hero and page transitions
- Product cards with enquiry modal
- Inquiry form with client-side validation/state
- Scroll progress indicator
- Reduced-motion support
- Beige design system using the supplied palette
- GitHub Actions deployment to GitHub Pages

## 🎨 Design System

```css
--bg-main: #fdfbf7;
--bg-surface: #f5f2eb;
--border-color: #e6dfd3;
--primary: #8c7a65;
--primary-hover: #766654;
--secondary: #b5a795;
--text-main: #2b2621;
--text-muted: #61574c;
```

The visual language is intentionally warm, minimal, architectural, and premium rather than a generic blue corporate template.

## 💻 Technology

- HTML5
- CSS3
- JavaScript
- React
- Vite
- GitHub Actions
- GitHub Pages

## 📁 Structure

```text
chandanshiv-cement-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

Application flow:

```text
index.html
    ↓
src/main.jsx
    ↓
src/App.jsx
    ↓
Home / About / Products / Services / Inquiry / Contact
    ↓
src/styles.css
```

## 🚀 Run locally

Requirements:

- Node.js 22+ recommended
- npm
- Git

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The Vite production output is generated in `dist/`.

## 🌐 GitHub Pages

The project deploys through `.github/workflows/deploy.yml`.

Deployment flow:

```text
Push to main
   ↓
GitHub Actions
   ↓
npm install
   ↓
npm run build
   ↓
Upload dist/
   ↓
GitHub Pages
```

Repository:

https://github.com/PAVANVASHISHTA/chandanshiv-cement-platform

Expected Pages URL:

https://pavanvashishta.github.io/chandanshiv-cement-platform/

The repository uses `base: './'` in Vite so generated assets remain compatible with the repository Pages path.

## 🧪 Verification checklist

Before calling a release complete:

- [ ] `npm install` succeeds
- [ ] `npm run build` succeeds
- [ ] Home screen renders
- [ ] About Us screen renders
- [ ] Products screen renders
- [ ] Product modal works
- [ ] Services screen renders
- [ ] Inquiry validation works
- [ ] Contact screen renders
- [ ] Mobile menu works
- [ ] Buttons remain usable on mobile
- [ ] No horizontal overflow
- [ ] Reduced-motion mode works
- [ ] GitHub Actions build succeeds
- [ ] GitHub Pages deployment succeeds
- [ ] Live Pages URL renders correctly

## 📩 Inquiry form

The form currently demonstrates frontend behaviour only. It does not deliver messages to a real inbox or CRM.

For production, connect it to a secure backend, serverless function, email provider, or CRM integration. Never place private credentials in frontend source code.

## ⚠️ Business information

Some contact/product details are intentionally marked as sample information. Before a public/client launch, replace them with verified company data, including:

- phone number
- email address
- physical address
- product specifications
- certifications
- delivery/service claims
- social links

Do not publish unverified business claims as factual information.

## ♿ Accessibility

The UI includes semantic controls, keyboard-friendly buttons, visible focus states, responsive touch targets, and `prefers-reduced-motion` support.

## 📄 License

No explicit open-source license is currently declared. Treat the company's branding, content, and business information as proprietary unless the repository owner states otherwise.
