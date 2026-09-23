# Hassan Nawaz — Academic Website

Personal academic website for Hassan Nawaz — plain HTML/CSS/JS, no build step, ready for
GitHub Pages. Styled to match [dr-dral.com](http://dr-dral.com/) (light blue-gray page
background, white content cards, sidebar with Search + News & Posts widgets, "Table of
Contents" boxes on longer pages) as a true multi-page site rather than a single scrolling page.

## Structure

```
index.html          Home
about.html           About (bio, Vita table, awards, skills, collaborations, contact)
research.html        Research (four threads + flagship project: Aitomia)
publications.html    Publications (ORCID/Scholar links, numbered list by category)
conferences.html     Conferences (numbered list with photo thumbnails + lightbox)
blog/
  index.html          Blog listing (card grid)
  starting-the-phd-journey.html
  why-conformer-search-needs-ml.html
css/style.css         All styling (CSS variables at the top control the palette)
js/main.js            Mobile nav, sidebar widgets (Search + News & Posts), lightbox
images/               Profile photo, conference photos, Aitomia screenshot, favicon
cv/hassan-cv.pdf      ⚠️ placeholder — replace with your real CV (see below)
```

Every page shares the same header/nav and footer, duplicated per file since there's no
build step. The right-hand sidebar (Search + News & Posts) is injected by `js/main.js`
into any `<aside id="sidebar">` element, so it stays in sync across pages automatically.

## Before you deploy

1. **Replace the CV.** `cv/hassan-cv.pdf` is currently a placeholder (just a name/title,
   not a real CV). Export your real CV as PDF and overwrite this file, keeping the same
   filename.
2. **Check the links** (Google Scholar, GitHub, LinkedIn, ORCID, email) across the pages —
   they were carried over from your previous site; update anything that's changed.
3. Add more publications by copying the `<li>` block inside `<ol class="pub-ol">` in
   `publications.html`. Add more conference entries the same way in `conferences.html`.
4. Add a new blog post by duplicating one of the files in `blog/`, then link it from
   `blog/index.html` and from the `newsItems` array in `js/main.js` (so it shows in the
   sidebar/home News & Posts list too).

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
