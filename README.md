# Muhammad Farooq — Portfolio

A single-page portfolio for Muhammad Farooq (Flutter & Android App Developer),
built with React, Vite, and Tailwind CSS.

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
