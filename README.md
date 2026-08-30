# Muhammad Farooq — Portfolio

A single-page portfolio for Muhammad Farooq (Flutter & Android App Developer),
built with React, Vite, and Tailwind CSS.

## Publish it live on GitHub Pages

This repo already includes `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages automatically on every push to `main`.
The git repo is already initialized locally with one commit — you just need
to create the GitHub repo and push.

1. Create a new **empty** repository on GitHub (no README/license/gitignore —
   this project already has them). Note the URL it gives you, e.g.
   `https://github.com/<your-username>/<repo-name>.git`

2. From this project folder, run:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub, go to the repo's **Settings → Pages**, and under "Build and
   deployment → Source", choose **GitHub Actions**. (You only need to do
   this once — after that, every push redeploys automatically.)

4. Wait a minute for the "Deploy to GitHub Pages" workflow to finish (check
   the **Actions** tab), then your site will be live at:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```

   The build uses relative asset paths (`base: './'` in `vite.config.js`),
   so it works correctly at that subpath without any extra configuration —
   no need to match the repo name to anything in the code.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serves the production build locally to double-check it
```

The production build outputs to `dist/`.

## Lint

```bash
npm run lint
```

## Editing content

All copy, project data, skills, experience, and contact info live in one file:

```
src/data/profile.js
```

Edit that file to change any text, add a project, or update contact details —
the components read from it and nothing else.

## Project images

All screenshots live in `src/assets/projects/`, named by project and screen
(e.g. `voetbal-1-splash.png`). The profile photo is at
`src/assets/profile/me.jpeg`.

## Please confirm: the "Lokats App" images

The three screenshots mapped to **Lokats App** (`lokats-1-splash.png`,
`lokats-2-onboarding.png`, `lokats-3-home.png`) show in-app branding that reads
**"Travellingo"**, not Lokats. None of the 11 project names given matched
that brand directly, so "Lokats App" was used as the closest thematic fit
(trip/itinerary planning) — this is called out in a comment in
`src/data/profile.js` above the `featuredProjects` array.

Please double check this pairing. If those screenshots belong to a
different project, either:
- Rename the `lokats-*.png` files and update the `name` field for that entry
  in `src/data/profile.js`, or
- Say what the correct project name is and it can be fixed.

## Notes on conservative content

Per the brief, no fabricated metrics, testimonials, employer history, or
social links are included:
- GitHub / LinkedIn buttons on the Contact section are disabled placeholders
  until real profile URLs are supplied.
- The contact form is a frontend-only demo — it is not wired to an email
  service. Real messages should go to the listed email/phone.
- Seven of the eleven listed projects (Guardian Go, Kusine, Less Stress,
  Potluck, Florus User, Florus Vendor, Florus Driver) have no supplied
  screenshots, so they appear in a text-only secondary archive rather than
  with a fabricated or generic image.
