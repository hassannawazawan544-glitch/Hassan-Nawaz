# Hassan Nawaz — Academic Website

Personal academic website for Hassan Nawaz — plain HTML/CSS/JS, no build step, ready for
GitHub Pages. Modern editorial academic style inspired by MIT/ETH-style personal research
sites: serif display type (Fraunces) + clean sans body (Inter), scroll-reveal animation,
animated stat counters, dark mode, and a subtle animated "polymer chain" motif in the hero
(a nod to the AI-for-copolymers research focus). All content is sourced from `Hassan_CV.pdf`.

## Structure

```
index.html          Home — hero, animated stats, research snapshot, Aitomia, news
about.html           About — bio, Vita, work experience, awards, skills, collaborations, contact
research.html        Research — full research-experience write-ups (from the CV) + Aitomia
publications.html    Publications — journal article with correct author/co-first-author order
conferences.html     Conferences — 11 talks/posters/workshops with photo thumbnails + lightbox
blog/
  index.html          Blog listing (card grid)
  starting-the-phd-journey.html
  why-conformer-search-needs-ml.html
css/style.css         All styling (CSS variables at the top control the palette + dark mode)
js/main.js            Dark mode toggle, mobile nav, scroll-reveal, stat counters, lightbox
images/               Profile photo, conference photos, Aitomia screenshot, favicon
cv/hassan-cv.pdf      Your real CV (served for download from the site)
```

Every page shares the same header/nav and footer, duplicated per file since there's no
build step. `Hassan_CV.pdf` in the repo root is your original CV file kept for reference —
`cv/hassan-cv.pdf` is the copy actually served/downloaded from the site; keep them in sync
if you update your CV.

## Updating content

- **CV changed?** Re-export it and overwrite `cv/hassan-cv.pdf` (same filename), then
  update the relevant facts (education, awards, experience) across `about.html` and
  `research.html` to match.
- **New publication:** copy the `<li class="pub-item">` block in `publications.html`.
- **New conference/talk:** copy a `<li class="conf-card">` block in `conferences.html`.
- **New blog post:** duplicate a file in `blog/`, link it from `blog/index.html`, and add
  it to the news list in `index.html` and the `newsItems` (if reintroduced) or the News
  section markup directly.
- **Colors/theme:** edit the CSS variables at the top of `css/style.css` (`--accent`,
  `--accent-2`, etc.) — both light and dark mode palettes are defined there.

## Deploy to GitHub Pages

Already set up — this repo is pushed to
[github.com/hassannawazawan544-glitch/Hassan-Nawaz](https://github.com/hassannawazawan544-glitch/Hassan-Nawaz)
with GitHub Pages enabled, live at:

**https://hassannawazawan544-glitch.github.io/Hassan-Nawaz/**

To publish further changes:

```bash
git add -A
git commit -m "Describe the change"
git push
```

GitHub Pages redeploys automatically within a minute or two of every push to `main`.

## Local preview

No build step needed — just serve the folder locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
