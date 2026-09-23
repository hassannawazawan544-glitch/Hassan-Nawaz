// ---------- Path helpers ----------
const inBlog = window.location.pathname.includes('/blog/');
const root = inBlog ? '../' : '';

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ---------- Footer year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Site search index ----------
const searchIndex = [
  { title: 'Home', url: `${root}index.html`, keywords: 'home hassan nawaz overview' },
  { title: 'About', url: `${root}about.html`, keywords: 'about bio vita education awards scholarships skills tools collaborations contact email hkust xiamen dral hanyu gao' },
  { title: 'Research', url: `${root}research.html`, keywords: 'research machine learning potentials quantum chemistry ai agents molecular discovery aitomia mlatom aiqm' },
  { title: 'Publications', url: `${root}publications.html`, keywords: 'publications journal articles jctc aitomia preprints doi' },
  { title: 'Conferences', url: `${root}conferences.html`, keywords: 'conferences ccs acs iccoc esaim mdmm xacs poster talks award chongqing atlanta shenzhen shanghai wroclaw' },
  { title: 'Blog: Why Conformer Search Needs Machine Learning', url: `${root}blog/why-conformer-search-needs-ml.html`, keywords: 'conformer search meta-dynamics crest mlip blog post' },
  { title: 'Blog: Starting the PhD Journey', url: `${root}blog/starting-the-phd-journey.html`, keywords: 'phd journey xiamen hkust blog post' },
  { title: 'Curriculum Vitae (PDF)', url: `${root}cv/hassan-cv.pdf`, keywords: 'cv resume curriculum vitae pdf' },
];

// ---------- News & Posts widget items (shared across sidebar + home) ----------
const newsItems = [
  { title: 'JCTC: "Aitomia" published', date: 'Apr 2026', url: `${root}publications.html` },
  { title: 'Best Poster Award — 35th CCS Congress', date: 'Apr 2026', url: `${root}conferences.html` },
  { title: 'Why Conformer Search Needs Machine Learning', date: 'May 12, 2026', url: `${root}blog/why-conformer-search-needs-ml.html` },
  { title: 'Starting the PhD Journey: From Xiamen to HKUST', date: 'Apr 2, 2026', url: `${root}blog/starting-the-phd-journey.html` },
];

// ---------- Build sidebar widgets ----------
const sidebar = document.getElementById('sidebar');
if (sidebar) {
  const searchWidget = document.createElement('div');
  searchWidget.className = 'widget';
  searchWidget.innerHTML = `
    <h3>Search</h3>
    <div class="search-row">
      <input type="text" id="siteSearchInput" placeholder="Search this site…" autocomplete="off">
      <button type="button" id="siteSearchBtn">Search</button>
    </div>
    <div class="search-results" id="siteSearchResults"></div>
  `;

  const newsWidget = document.createElement('div');
  newsWidget.className = 'widget';
  const items = newsItems
    .map(
      (n) => `<li><a href="${n.url}">${n.title}</a><span class="wp-date">${n.date}</span></li>`
    )
    .join('');
  newsWidget.innerHTML = `<h3>News &amp; Posts</h3><ul class="widget-post-list">${items}</ul>`;

  sidebar.appendChild(searchWidget);
  sidebar.appendChild(newsWidget);

  const runSearch = () => {
    const q = document.getElementById('siteSearchInput').value.trim().toLowerCase();
    const resultsEl = document.getElementById('siteSearchResults');
    if (!q) {
      resultsEl.innerHTML = '';
      return;
    }
    const matches = searchIndex.filter(
      (item) => item.title.toLowerCase().includes(q) || item.keywords.includes(q)
    );
    resultsEl.innerHTML = matches.length
      ? matches.map((m) => `<a href="${m.url}">${m.title}</a>`).join('')
      : '<span class="none">No results found.</span>';
  };

  document.getElementById('siteSearchBtn').addEventListener('click', runSearch);
  document.getElementById('siteSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runSearch();
  });
}

// ---------- Lightbox for conference photos ----------
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.conf-thumbs button').forEach((btn) => {
    btn.addEventListener('click', () => {
      lightboxImg.src = btn.getAttribute('data-img');
      lightboxImg.alt = btn.querySelector('img')?.alt || '';
      lightboxCaption.textContent = btn.getAttribute('data-caption') || '';
      lightbox.classList.add('open');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
