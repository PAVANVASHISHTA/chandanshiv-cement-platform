# Chandanshiv Cement Products

A premium, responsive business website for **Chandanshiv Cement Products**, built from the supplied project archive with React, Vite, modern CSS, and lightweight UI interactions.

> **Stronger foundations. Better tomorrow.**

## ✨ Project Overview

The website presents Chandanshiv Cement Products through a polished construction-focused interface with:

- Responsive desktop, tablet, and mobile layouts
- Hero and brand introduction sections
- Cement product showcase
- Services and quality/value sections
- Project/application presentation
- Customer enquiry form with client-side validation/state
- Contact and footer sections
- Smooth UI interactions and responsive navigation
- Warm architectural visual direction

The project is intentionally kept as a frontend application. No backend or database is assumed.

## 🧱 Technology Stack

| Technology | Purpose |
|---|---|
| React 18 | UI/component architecture |
| Vite 6 | Development server and production bundling |
| JavaScript | Interactions and application logic |
| CSS | Responsive design, layout, animation, and theming |
| Lucide React | UI icons |
| GitHub Actions | Continuous build/deployment workflow |
| GitHub Pages | Static hosting |

## 📁 Project Structure

```text
chandanshiv-cement-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
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

### Application entry point

```text
index.html
    ↓
src/main.jsx
    ↓
src/App.jsx
    ↓
src/styles.css
```

`index.html` is the Vite/React entry shell. The actual interface is rendered by the React application mounted from `src/main.jsx`.

## 🚀 Run Locally

### Requirements

- Node.js 20+ recommended
- npm 10+ recommended
- Git

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Create a production build

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

The repository is configured for deployment through **GitHub Actions**.

Every push to `main` is intended to run:

```text
Checkout
   ↓
Setup Node
   ↓
Install dependencies
   ↓
Build with Vite
   ↓
Upload dist/
   ↓
Deploy to GitHub Pages
```

### Repository

https://github.com/PAVANVASHISHTA/chandanshiv-cement-platform

### Expected Pages URL

https://pavanvashishta.github.io/chandanshiv-cement-platform/

### Important deployment note

GitHub Pages must use **GitHub Actions** as its deployment source for the workflow in `.github/workflows/deploy.yml` to control the deployment.

Do not assume that a successful GitHub Actions workflow automatically means the live website has been visually verified. Always check the deployed URL after deployment.

## 🔧 Build & Deployment Troubleshooting

If the site is blank after deployment, check these in order:

1. Open the GitHub Actions run and confirm the **Build** job succeeded.
2. Confirm `npm run build` completed successfully.
3. Confirm `dist/` was uploaded as the Pages artifact.
4. Confirm the **Deploy** job succeeded.
5. Open the repository's **Settings → Pages** and verify the source is **GitHub Actions**.
6. Open the repository Pages URL, not the account root URL.
7. Check browser DevTools → Console and Network for 404s or JavaScript errors.
8. Verify generated asset paths match the deployed repository path.
9. Hard-refresh or test in a private/incognito window to rule out stale cached assets.

Never mark a deployment as successful solely because a workflow was triggered; verify the actual build, deployment, and live response.

## 📝 Content & Business Data

Before public/client launch, review all business-facing content in `src/App.jsx` and replace any sample or placeholder information with verified company data.

This includes:

- Company address
- Phone numbers
- Email addresses
- Product specifications
- Product availability
- Certifications or quality claims
- Social media links
- Business hours

Do not publish unverified claims as factual company information.

## 📩 Enquiry Form

The current enquiry form is frontend-only. It can display a local success state but does **not** automatically deliver enquiries to a real business inbox or CRM.

For production use, connect it to an appropriate backend or service such as:

- A serverless function
- A secure API
- An email service
- A CRM/webhook integration

Never place private API credentials directly in frontend source code.

## 🔐 Security

Do not commit:

```text
.env
.env.*
node_modules/
dist/
*.log
```

If environment variables are required, document their names in an `.env.example` file without including real credentials.

## ♿ Accessibility

The frontend should preserve:

- Semantic HTML
- Keyboard-accessible controls
- Visible focus states
- Form labels
- Responsive touch targets
- Reduced-motion considerations
- Sufficient text/background contrast

Accessibility should be checked again whenever the UI or animation system is changed.

## 📱 Responsive Targets

The interface should be tested at representative widths including:

- 1440px desktop
- 1280px desktop
- 1024px tablet/small desktop
- 768px tablet
- 430px mobile
- 390px mobile
- 375px mobile

Check specifically for horizontal overflow, clipped content, broken navigation, and inaccessible controls.

## 🧪 Verification Checklist

Before considering a release ready:

- [ ] `npm install` succeeds
- [ ] `npm run build` succeeds
- [ ] Development server renders correctly
- [ ] Production preview renders correctly
- [ ] Desktop layout checked
- [ ] Mobile layout checked
- [ ] Images/assets load
- [ ] Navigation works
- [ ] Forms validate correctly
- [ ] Browser console has no unexpected errors
- [ ] GitHub Actions build succeeds
- [ ] GitHub Pages deployment succeeds
- [ ] Live Pages URL renders the application
- [ ] No secrets are committed

## 📄 License

No explicit open-source license is currently declared. Treat the project's content, branding, images, and business information as proprietary unless the repository owner states otherwise.
