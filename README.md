# hassan-nawaz-awan.github.io (or hassan_nawaz)

Personal academic website for Hassan Nawaz — plain HTML/CSS/JS, no build step, ready for GitHub Pages.

## Structure

```
index.html               Main one-page site (About, Research, Publications, Education,
                          Awards, Conferences, Collaborations, News, Skills, Blog teaser, Contact)
blog/
  index.html              Blog listing
  starting-the-phd-journey.html
  why-conformer-search-needs-ml.html
css/style.css             All styling (CSS variables at the top control the color palette)
js/main.js                Mobile nav, scroll-spy, lightbox, back-to-top, contact-form mailto
images/                   Profile photo, conference photos, Aitomia screenshot, favicon
cv/hassan-cv.pdf          ⚠️ placeholder — replace with your real CV (see below)
```

## Before you deploy

1. **Replace the CV.** `cv/hassan-cv.pdf` is currently the placeholder file from your old
   site (just a name/title, not a real CV). Export your real CV as PDF and overwrite this
   file, keeping the same filename.
2. **Check the links** in `index.html` (Google Scholar, GitHub, LinkedIn, ORCID, email) —
   they were carried over from your previous site; update anything that's changed.
3. Optional: add more publications by copying the `<li class="pub-item">` block in the
   Publications section of `index.html`.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `hassan-nawaz-awan.github.io` for a user site,
   or any name for a project site).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial academic website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → main / (root)** → Save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   (or `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`).

## Local preview

No build step needed — just serve the folder locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Contact form note

The contact form has no backend (GitHub Pages only serves static files), so it opens the
visitor's email client with a pre-filled message via a `mailto:` link. If you'd like a real
in-page submission, wire the form up to a service like
[Formspree](https://formspree.io) or [Getform](https://getform.io) (both have free tiers) —
just point the `<form action="...">` at the endpoint they give you and remove the JS
`preventDefault` handler in `js/main.js`.
