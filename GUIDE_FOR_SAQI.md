# Guide for Saqi — Editing This Website

Hey! This branch (`saqi-branch`) is yours to experiment on. Push whatever changes you
want here — Hassan will review the diff and merge into `main` (which is what's actually
live on GitHub Pages) when he's happy with it. Nothing you push here goes live on its own.

## What this is

A plain HTML/CSS/JS personal academic website. No build step, no framework, no
`npm install` — open a file, edit it, refresh the browser. That's the whole workflow.

## File structure

```
index.html          Home page
about.html           Bio, education timeline, awards, memberships, skills, contact
research.html        Research experience write-ups + the Aitomia project
publications.html    Papers, synced from Google Scholar
conferences.html     Talks/posters, with photo galleries + lightbox
blog/
  index.html          Blog post listing
  starting-the-phd-journey.html   The one real post
css/style.css         All styling — CSS variables at the top control the whole palette
js/main.js            Dark mode toggle, scroll animations, lightbox, visit counter
images/               Photos, favicons, the publications figure
cv/hassan-cv.pdf       Hassan's real CV, served for download
```

Every page repeats the same `<header>` nav and `<footer>` markup — there's no shared
template/include system, so if you change the nav (e.g. add a page), update it in
**all** HTML files, not just one.

## Design system

Colors, fonts, spacing are all CSS variables at the top of `css/style.css`:

```css
:root {
  --accent: #2f5fed;      /* primary blue */
  --accent-2: #0fb5ae;    /* teal, used in gradients */
  --bg: #ffffff;
  ...
}
[data-theme="dark"] { ... }  /* dark mode overrides — keep both in sync if you touch colors */
```

Fonts: **Fraunces** (serif, for headings/display) + **Inter** (sans, for body text),
loaded from Google Fonts in each page's `<head>`.

Animations are done with a `.reveal` / `.reveal-stagger` class + `IntersectionObserver`
in `js/main.js` — add `class="reveal"` to a container and it'll fade/slide in on scroll.
No animation library, just plain CSS transitions.

## Previewing your changes

No build step — just serve the folder and open it in a browser:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Check both light and dark mode (the moon/sun icon
in the nav), and check mobile width too (things reflow to one column under ~860px).

## Ground rules — please read

- **Don't invent facts.** Everything on this site (education, papers, conference talks,
  citation counts) is real, taken from Hassan's actual CV and Google Scholar profile.
  If you want to add or change *content* (not just styling), check with Hassan first —
  it's his bio, not a demo site.
- **Cosmetic/UX changes are fair game** — better animations, layout tweaks, performance,
  accessibility fixes, cleaning up CSS, adding nice touches. Go for it.
- Keep it a **static site** — no new frameworks, no build tooling, no server-side code.
  The whole point is that it deploys to GitHub Pages with zero build step.
- Test in both light and dark mode before pushing.

## Workflow

1. Make sure you're on `saqi-branch` (`git branch` to check).
2. Edit, preview locally, commit, push:
   ```bash
   git add -A
   git commit -m "Describe what you changed"
   git push origin saqi-branch
   ```
3. Hassan will look at the branch (or a PR from it) and merge into `main` if it looks good —
   that's the only branch that actually deploys to the live site.

Have fun with it!
