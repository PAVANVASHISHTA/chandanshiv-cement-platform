# Chandanshiv Cement Products

Responsive business website for Chandanshiv Cement Products, rebuilt from the supplied project archive using React, Vite, CSS and Lucide icons.

## Stack
- React 18
- Vite 6
- CSS
- Lucide React
- GitHub Actions + GitHub Pages

## Local development
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

## Deployment
Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow builds `dist/` and deploys it through GitHub Pages.

Repository: https://github.com/PAVANVASHISHTA/chandanshiv-cement-platform

Pages: https://pavanvashishta.github.io/chandanshiv-cement-platform/

## Notes
The enquiry form is frontend-only and shows a local success state. Connect it to a backend, email service, serverless function or CRM before using it for real submissions.

Replace sample contact details in `src/App.jsx` with verified business information before public launch.
