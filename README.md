# Chandanshiv Cement Products

A premium, responsive **vanilla HTML + CSS + JavaScript** website for Chandanshiv Cement Products, designed around a warm beige architectural visual system.

> **Stronger foundations. Better tomorrow.**

## ✨ Frontend

The current frontend is intentionally framework-free for simple GitHub Pages hosting and predictable deployment.

It includes:

- Adaptive desktop, tablet and mobile layouts
- Beige architectural design system
- Animated hero composition
- Scroll reveal animations
- Scroll progress indicator
- Responsive navigation drawer
- Adaptive pill buttons and hover/magnetic interactions
- Interactive product enquiry modal
- Client-side enquiry form feedback
- Accessible labels, focus states and reduced-motion support
- Contact and footer sections

## 🎨 Beige Design System

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

The palette is used consistently for canvas, surfaces, borders, interactive elements, typography and hover states.

## 🧱 Technology

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Layout, responsive design, animation and theme |
| Vanilla JavaScript | Navigation, modal, form state and motion |
| GitHub Actions | Deployment automation |
| GitHub Pages | Static hosting |

No React, Vite, npm dependency installation or JavaScript framework is required for the current frontend.

## 📁 Structure

```text
chandanshiv-cement-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

The runtime is intentionally simple:

```text
index.html
   ├── styles.css
   └── script.js
```

## 🚀 Run Locally

Because this is a static website, no build step is required.

You can open `index.html` directly in a browser, or use any local static server.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 🌐 GitHub Pages

The repository deploys the static site directly through GitHub Actions.

```text
Push to main
    ↓
GitHub Actions
    ↓
Upload repository as Pages artifact
    ↓
GitHub Pages
```

Repository:

https://github.com/PAVANVASHISHTA/chandanshiv-cement-platform

Expected Pages URL:

https://pavanvashishta.github.io/chandanshiv-cement-platform/

GitHub Pages should use **GitHub Actions** as its deployment source.

## 🔧 Troubleshooting

If the site is blank:

1. Check the latest GitHub Actions run.
2. Confirm the deployment job succeeded.
3. Confirm `index.html`, `styles.css` and `script.js` are present at the repository root.
4. Open the repository Pages URL rather than `https://pavanvashishta.github.io/`.
5. Open browser DevTools → Console and Network.
6. Check for missing CSS/JS files or JavaScript errors.
7. Hard-refresh or test in a private window if an old deployment is cached.

A workflow being triggered is **not** sufficient evidence of a working website. Verify the deployment and live page separately.

## 📩 Enquiry Form

The enquiry form currently provides frontend feedback only. It does not send submissions to a real inbox or CRM.

For production use, connect it to a secure backend, serverless function, email provider or CRM integration. Never place private credentials in `script.js` or other browser-delivered files.

## 📝 Business Information

Before public launch, replace placeholder information with verified company data, including:

- Address
- Phone number
- Email
- Product specifications
- Certifications
- Availability
- Social links
- Business hours

Do not publish unverified claims as official company facts.

## ♿ Accessibility

The frontend includes semantic controls, visible focus behavior, keyboard-friendly interactions and a `prefers-reduced-motion` fallback.

Test the website with keyboard navigation, mobile touch interaction and a screen reader before final launch.

## 📱 Responsive Targets

Recommended verification widths:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 375px

Check for horizontal overflow, clipped content, navigation failures and unusable buttons.

## 🧪 Release Checklist

- [ ] Homepage loads
- [ ] Navigation works on desktop and mobile
- [ ] Buttons adapt correctly to viewport width
- [ ] Product modal opens/closes
- [ ] Inquiry form validates and responds
- [ ] Scroll animations work
- [ ] Reduced-motion mode works
- [ ] No unexpected console errors
- [ ] CSS loads correctly on GitHub Pages
- [ ] JavaScript loads correctly on GitHub Pages
- [ ] GitHub Actions deployment succeeds
- [ ] Live Pages URL renders correctly
- [ ] Placeholder business information is replaced

## 📄 License

No explicit open-source license is currently declared. Treat the business branding, content and imagery as proprietary unless the repository owner states otherwise.
