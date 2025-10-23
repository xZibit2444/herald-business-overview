# Herald Business Solutions — Website

  This repository contains the front-end for the Herald Business Solutions website built with React + Vite.

  What you'll find
  - React + TypeScript application scaffolded with Vite
  - Source components in `src/components`
  - Static/public assets in `public`

  Quick development

  Install dependencies (PowerShell):

  ```powershell
  npm install
  ```

  Run the dev server:

  ```powershell
  npm run dev
  # local: http://localhost:3000/
  ```

  Build for production:

  ```powershell
  npm run build
  # output will be in ./build
  ```

  Preview the production build locally:

  ```powershell
  npm run preview
  ```

  Notes
  - Contact form: currently uses a `mailto:` flow that opens the user's default mail client and sends to `info@heraldbusiness.org`.
  - Favicon: primary icon is `public/favicon.svg` with `public/favicon.png` and `public/favicon.ico` as fallbacks. Use the helper HTML files in `public/` to generate different sizes if needed.

  Deployment options

  Vercel (recommended):
  1. Optionally install the CLI: `npm i -g vercel`
  2. Run `vercel` from the project root and follow prompts. Vercel auto-detects Vite and configures the build.

  Netlify:
  1. Drag & drop the `build` folder to Netlify Drop (https://app.netlify.com/drop) or use Netlify CLI.
  2. With CLI: `npm i -g netlify-cli` then `netlify deploy --dir=build --prod`.

  GitHub Pages:
  - Build locally and push the `build` output to a `gh-pages` branch, or use a deploy action.

  If you'd like me to deploy the site for you, tell me which provider (Vercel/Netlify/GitHub Pages) and whether you want me to use the CLI (I'll need your permission/credentials).

  Troubleshooting
  - If the dev server doesn't start, ensure Node.js is installed and `npm install` completed successfully.
  - If an image doesn't show, check `src/assets` and `public` for the asset file.

  Additional help
  - I can convert the contact form to a server-backed endpoint (requires a backend), add analytics, or wire up CI/CD deployment.

  ---

  Generated/updated by the project maintainer.
  