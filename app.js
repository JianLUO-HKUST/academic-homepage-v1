let currentLang = "en";

const navLinks = document.getElementById("navLinks");
const dockNavLinks = document.getElementById("dockNavLinks");
const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const publicationsGrid = document.getElementById("publicationsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const noteStack = document.getElementById("noteStack");
const skillsProList = document.getElementById("skillsProList");
const skillsLearningList = document.getElementById("skillsLearningList");
const imageLightbox = document.getElementById("imageLightbox");
const imageLightboxImg = document.getElementById("imageLightboxImg");
const imageLightboxClose = document.getElementById("imageLightboxClose");

const STORAGE_KEY = "academic_homepage_content_v2";

const textIds = [
  "brandName", "heroCrumb", "heroGreeting", "heroName", "heroAffiliation", "heroInterests",
  "heroPhdNote",
  "heroCardTitle", "heroCardSubtitle", "heroProfileLocation", "heroProfileStatus", "heroProfileAddress", "heroLinkScholarText", "heroLinkGithubText", "heroLinkEmailText", "heroMiniNote1", "heroMiniNote2", "heroMiniNote3", "heroMiniNote4", "heroMiniNote5", "heroMiniNote6",
  "researchNotesTitle", "skillsTitle", "skillsProTitle", "skillsLearningTitle", "cvButton", "contactButton", "bioTitle", "bioText", "researchTitle", "researchSectionNote", "publicationsTitle",
  "projectsTitle", "projectsSectionNote", "projectTypeLabel", "cvTitle", "cvText", "cvButtonInline",
  "contactTitle", "contactLabelEmail", "contactLabelX", "contactLabelAddress", "footerText"
];

const noteColorClasses = [
  "note-green",
  "note-yellow",
  "note-pink",
  "note-blue",
  "note-lavender"
];

const dockIcons = {
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/></svg>`,
  bio: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c1.7-3.3 4.3-5 7-5s5.3 1.7 7 5"/></svg>`,
  research: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5.5 5.5"/><path d="M10 7v6M7 10h6"/></svg>`,
  projects: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4" width="17" height="16" rx="2.5"/><path d="M8.5 4v16M3.5 9.5h17"/></svg>`,
  cv: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 20V5a1.5 1.5 0 0 1 1-1.5z"/><path d="M14 3.5V8h4"/><path d="M10 12h6M10 15h6M10 18h4"/></svg>`,
  contact: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5 12 13l8-5.5"/><rect x="4" y="6" width="16" height="12" rx="2.2"/></svg>`
};

function deepMerge(target, source) {
  Object.keys(source || {}).forEach((key) => {
    const srcVal = source[key];
    if (Array.isArray(srcVal)) {
      target[key] = srcVal;
      return;
    }

    if (srcVal && typeof srcVal === "object") {
      if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key])) {
        target[key] = {};
      }
      deepMerge(target[key], srcVal);
      return;
    }

    target[key] = srcVal;
  });
}

function loadPersistedContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    deepMerge(siteContent, JSON.parse(raw));
  } catch (error) {
    console.warn("Failed to load saved content.", error);
  }
}

function renderNav(data) {
  const topHtml = data.nav
    .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join("");

  const dockHtml = data.nav
    .map((item) => {
      const icon = dockIcons[item.id] || dockIcons.home;
      return `<li><a href="#${item.id}" aria-label="${item.label}"><span class="dock-icon" aria-hidden="true">${icon}</span><span class="dock-label">${item.label}</span></a></li>`;
    })
    .join("");

  navLinks.innerHTML = topHtml;
  dockNavLinks.innerHTML = dockHtml;
}

function renderList(id, items) {
  const list = document.getElementById(id);
  if (!list) return;
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderResearchSection(data) {
  const board = document.getElementById("researchList");
  if (!board) return;

  const items = data.researchItems || [];
  board.innerHTML = items
    .map((item, idx) => {
      const topicTitle = typeof item === "string" ? item : item.title;
      const works = Array.isArray(item?.works) && item.works.length
        ? item.works
        : [{
          title: "Poster Title Placeholder",
          abstract: "Add your abstract here. You can put project context, methods, and outcomes.",
          keywords: ["Keyword A", "Keyword B", "Keyword C"],
          image: "assets/images/project-1.svg"
        }];
      const hasCarousel = works.length > 1;
      const tone = `research-card--${(idx % 6) + 1}`;
      const index = String(idx + 1).padStart(2, "0");
      const worksHtml = works.map((work, wIdx) => {
        const metaChips = [
          work.type ? `<span class="meta-chip meta-chip-type">${work.type}</span>` : "",
          work.status ? `<span class="meta-chip meta-chip-status">${work.status}</span>` : "",
          work.courseCode ? `<span class="meta-chip meta-chip-course">${work.courseCode}</span>` : "",
          work.partner ? `<span class="meta-chip meta-chip-partner">${work.partner}</span>` : ""
        ].filter(Boolean).join("");
        const metaHtml = metaChips ? `<div class="work-meta-row">${metaChips}</div>` : "";
        const keywordHtml = (work.keywords || [])
          .map((kw, kIdx) => `<span class="project-keyword project-keyword--${(kIdx % 6) + 1}">${kw}</span>`)
          .join("");
        return `
          <article class="research-work-card" data-work-index="${wIdx}">
            <img class="research-work-poster" src="${work.image || "assets/images/project-1.svg"}" alt="${work.title} poster" />
            <div class="research-work-copy">
              <h4>${work.title}</h4>
              ${metaHtml}
              <p>${work.abstract}</p>
              <div class="research-work-keywords">${keywordHtml}</div>
            </div>
          </article>
        `;
      }).join("");
      const controlsHtml = hasCarousel
        ? `
            <div class="research-carousel-controls">
              <button type="button" class="research-carousel-btn" data-action="prev" aria-label="Previous card">‹</button>
              <span class="research-carousel-status">1 / ${works.length}</span>
              <button type="button" class="research-carousel-btn" data-action="next" aria-label="Next card">›</button>
            </div>
          `
        : "";
      return `
        <article class="research-card ${tone}">
          <div class="research-card-head">
            <div class="research-card-index">${index}</div>
            <p class="research-card-title">${topicTitle}</p>
          </div>
          <div class="research-workbox ${hasCarousel ? "has-carousel" : "is-static"}" data-carousel-id="research-${idx}">
            <div class="research-carousel">
              ${worksHtml}
            </div>
            ${controlsHtml}
          </div>
        </article>
      `;
    })
    .join("");

  initResearchCarousels();
}

function initResearchCarousels() {
  const boxes = document.querySelectorAll(".research-workbox");
  boxes.forEach((box) => {
    if (box.dataset.carouselBound === "true") return;
    box.dataset.carouselBound = "true";

    const cards = Array.from(box.querySelectorAll(".research-work-card"));
    const status = box.querySelector(".research-carousel-status");
    const len = cards.length;
    let current = 0;

    if (len <= 1) {
      cards.forEach((card, idx) => {
        card.classList.toggle("is-active", idx === 0);
        card.classList.toggle("is-hidden", idx !== 0);
      });
      if (status) status.textContent = "1 / 1";
      return;
    }

    const renderDeck = () => {
      cards.forEach((card, idx) => {
        card.classList.remove("is-active", "is-hidden");
        if (idx === current) card.classList.add("is-active");
        else card.classList.add("is-hidden");
      });
      if (status) status.textContent = `${current + 1} / ${len}`;
    };

    renderDeck();

    box.querySelectorAll(".research-carousel-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        current = btn.dataset.action === "prev"
          ? (current - 1 + len) % len
          : (current + 1) % len;
        renderDeck();
      });
    });
  });
}

function renderPublications(data) {
  if (!publicationsGrid) return;

  publicationsGrid.innerHTML = data.publications
    .map((pub, idx) => {
      const abstractId = `abstract-${idx}`;
      return `
      <article class="card">
        <p class="pub-meta">${pub.venue} - ${pub.year}</p>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-meta">${pub.authors}</p>
        <div class="pub-actions">
          <button class="button button-secondary abstract-toggle" data-target="${abstractId}">${data.abstractButtonShow}</button>
          <a class="button button-secondary" href="${pub.pdf}" target="_blank" rel="noopener">${data.pdfButton}</a>
        </div>
        <p class="abstract" id="${abstractId}">${pub.abstract}</p>
      </article>`;
    })
    .join("");

  document.querySelectorAll(".abstract-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const open = target.classList.toggle("open");
      btn.textContent = open
        ? siteContent[currentLang].abstractButtonHide
        : siteContent[currentLang].abstractButtonShow;
    });
  });
}

function renderProjects(data) {
  const groups = data.projectGroups || [];
  projectsGrid.innerHTML = groups
    .map((group) => {
      const rows = (group.items || [])
        .map((project) => {
          const images = Array.isArray(project.images) && project.images.length
            ? project.images
            : [project.image];
          const galleryId = `project-gallery-${Math.random().toString(36).slice(2, 10)}`;
          const postersHtml = images
            .map((img, idx) => `
              <img
                src="${img}"
                alt="${project.title} poster ${idx + 1}"
                class="project-poster ${idx === 0 ? "is-active" : "is-hidden"}"
                data-poster-index="${idx}"
              />
            `)
            .join("");
          const galleryControlsHtml = images.length > 1
            ? `
              <button type="button" class="project-gallery-btn project-gallery-btn-prev" data-action="prev" aria-label="Previous image">‹</button>
              <span class="project-gallery-status">1 / ${images.length}</span>
              <button type="button" class="project-gallery-btn project-gallery-btn-next" data-action="next" aria-label="Next image">›</button>
            `
            : "";
          const galleryControlsWrapper = images.length > 1
            ? `<div class="project-gallery-controls">${galleryControlsHtml}</div>`
            : "";
          const keywords = (project.keywords || [])
            .map((keyword, idx) => {
              const tone = `project-keyword--${(idx % 6) + 1}`;
              return `<span class="project-keyword ${tone}">${keyword}</span>`;
            })
            .join("");
          const projectMetaChips = [
            project.status ? `<span class="meta-chip meta-chip-status">${project.status}</span>` : "",
            project.courseCode ? `<span class="meta-chip meta-chip-course">${project.courseCode}</span>` : ""
          ].filter(Boolean).join("");
          const projectMetaHtml = projectMetaChips ? `<div class="work-meta-row">${projectMetaChips}</div>` : "";
          const partnerHtml = project.partner
            ? `<span class="meta-chip meta-chip-partner project-collab-chip">${project.partner}</span>`
            : "";
          const typeHtml = project.type
            ? `<p class="project-type"><span class="project-type-note project-type-note-compact">${project.type}</span></p>`
            : "";
          return `
            <article class="project-row card">
              <div class="project-poster-wrap ${images.length > 1 ? "has-gallery" : ""}" data-project-gallery="${galleryId}">
                <div class="project-poster-stack">
                  ${postersHtml}
                </div>
                ${galleryControlsWrapper}
              </div>
              <div class="project-copy">
                <h4 class="project-title">${project.title}</h4>
                ${partnerHtml}
                ${typeHtml}
                ${projectMetaHtml}
                <p class="project-abstract">${project.description}</p>
                <div class="project-keywords">${keywords}</div>
              </div>
            </article>
          `;
        })
        .join("");
      return `
        <section class="project-group">
          <h3 class="project-period">${group.period}</h3>
          <div class="project-rows">${rows}</div>
        </section>
      `;
    })
    .join("");

  initProjectGalleries();
}

function initProjectGalleries() {
  const galleries = document.querySelectorAll("[data-project-gallery]");
  galleries.forEach((gallery) => {
    if (gallery.dataset.galleryBound === "true") return;
    gallery.dataset.galleryBound = "true";

    const posters = Array.from(gallery.querySelectorAll(".project-poster"));
    const status = gallery.querySelector(".project-gallery-status");
    const buttons = gallery.querySelectorAll(".project-gallery-btn");

    if (posters.length <= 1) return;

    let current = 0;
    const len = posters.length;

    const renderGallery = () => {
      posters.forEach((poster, idx) => {
        poster.classList.toggle("is-active", idx === current);
        poster.classList.toggle("is-hidden", idx !== current);
      });
      if (status) status.textContent = `${current + 1} / ${len}`;
    };

    renderGallery();

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        current = button.dataset.action === "prev"
          ? (current - 1 + len) % len
          : (current + 1) % len;
        renderGallery();
      });
    });
  });
}

function renderResearchNotes(data) {
  const sourceItems = Array.isArray(data.researchNotesItems) && data.researchNotesItems.length
    ? data.researchNotesItems
    : (data.researchItems || []);
  const items = sourceItems.slice(0, 5);
  noteStack.innerHTML = items
    .map((item, index) => {
      const label = typeof item === "string" ? item : item.title;
      const colorClass = noteColorClasses[index % noteColorClasses.length];
      return `<span class="note ${colorClass} draggable-note" data-x="0" data-y="0">${label}</span>`;
    })
    .join("");
}

function renderSkills(data) {
  if (!skillsProList || !skillsLearningList) return;

  const proficientItems = data.skillsItems || [];
  const learningItems = data.skillsLearningItems || [];

  skillsProList.innerHTML = proficientItems
    .map((item, idx) => {
      const tone = `skill-chip--${(idx % 6) + 1}`;
      return `<span class="skill-chip ${tone}">${item}</span>`;
    })
    .join("");

  skillsLearningList.innerHTML = learningItems
    .map((item, idx) => {
      const tone = `skill-chip--${(idx % 6) + 1}`;
      return `<span class="skill-chip ${tone}">${item}</span>`;
    })
    .join("");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatHeroName(name) {
  const displayName = name.includes("🐚") ? name : `${name} 🐚`;
  const match = displayName.match(/^(.*?)([（(].*[）)])(.*)$/);
  if (!match) return displayName;

  const latin = match[1].trim();
  const cjk = match[2];
  const tail = (match[3] || "").trim();
  return `<span class="name-latin">${latin}</span> <span class="name-cjk">${cjk}</span>${tail ? ` <span class="name-tail">${tail}</span>` : ""}`;
}

function applyBioHighlights(text) {
  const keywords = [
    "MPhil student",
    "APEX Lab",
    "human-AI alignment",
    "progressive intent alignment",
    "context-aware interaction",
    "generative user interfaces and applications",
    "physical and cognitive well-being",
    "MPhil 学生",
    "human-AI alignment",
    "progressive intention alignment",
    "context-aware interaction",
    "generative user interfaces/applications",
    "身体与认知健康"
  ];
  const mentorNames = [
    "Associate Professor Mingming Fan",
    "Assistant Professor Xin Tong",
    "Assistant Professor David Yip",
    "Mingming Fan",
    "Xin Tong",
    "David Yip"
  ];

  let result = text;
  keywords.forEach((keyword) => {
    const pattern = new RegExp(escapeRegExp(keyword), "gi");
    result = result.replace(pattern, `<span class="text-highlight">$&</span>`);
  });

  mentorNames.forEach((name) => {
    const pattern = new RegExp(escapeRegExp(name), "g");
    result = result.replace(pattern, `<span class="mentor-highlight">$&</span>`);
  });

  const dotStop = result.indexOf(".");
  const cnStop = result.indexOf("。");
  const firstStop = dotStop === -1 ? cnStop : (cnStop === -1 ? dotStop : Math.min(dotStop, cnStop));
  if (firstStop > 0) {
    const lead = result.slice(0, firstStop + 1);
    const rest = result.slice(firstStop + 1);
    return `<strong class="lead-strong">${lead}</strong>${rest}`;
  }

  return result;
}

function setActiveSection(sectionId) {
  navLinks.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", active);
  });

  dockNavLinks.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", active);
  });
}

function getVisibleSectionId(navItems) {
  const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
  const fromTop = window.scrollY + window.innerHeight * 0.35;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= fromTop) {
      currentSection = section;
    }
  });

  return currentSection ? currentSection.id : navItems[0].id;
}

function renderContent(lang) {
  const data = siteContent[lang];

  textIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = data[id];
  });

  const heroNameEl = document.getElementById("heroName");
  heroNameEl.innerHTML = formatHeroName(data.heroName);

  renderNav(data);
  renderResearchNotes(data);
  renderSkills(data);
  renderResearchSection(data);
  renderPublications(data);
  renderProjects(data);
  initDraggableNotes();

  const interestsEl = document.getElementById("heroInterests");
  const hasResearchNotes = (data.researchItems || []).length > 0;
  interestsEl.style.display = hasResearchNotes ? "none" : "";

  const bioEl = document.getElementById("bioText");
  bioEl.innerHTML = applyBioHighlights(data.bioText);

  const emailEl = document.getElementById("contactEmail");
  emailEl.textContent = data.contactEmail;
  emailEl.href = `mailto:${data.contactEmail}`;

  const officeEl = document.getElementById("contactOffice");
  officeEl.textContent = data.contactOffice;

  const scholar = document.getElementById("contactScholar");
  scholar.textContent = data.contactScholar;

  const heroScholar = document.getElementById("heroLinkScholar");
  if (heroScholar) {
    heroScholar.href = data.heroLinkScholar || "#";
  }

  const heroGithub = document.getElementById("heroLinkGithub");
  if (heroGithub) {
    heroGithub.href = data.heroLinkGithub || "#";
  }

  const heroEmail = document.getElementById("heroLinkEmail");
  if (heroEmail) {
    const email = data.heroLinkEmail || data.contactEmail;
    const isMail = email.includes("@") && !email.startsWith("http");
    heroEmail.href = isMail ? `mailto:${email}` : email;
  }

  langToggle.textContent = lang === "en" ? "中文" : "EN";
  document.documentElement.lang = lang === "en" ? "en" : "zh";

  setActiveSection(getVisibleSectionId(data.nav));
}

function bindScrollState() {
  window.addEventListener("scroll", () => {
    const navItems = siteContent[currentLang].nav;
    setActiveSection(getVisibleSectionId(navItems));
  }, { passive: true });
}

function initDraggableNotes() {
  const notes = document.querySelectorAll(".draggable-note");
  notes.forEach((note) => {
    if (note.dataset.draggableBound === "true") return;
    note.dataset.draggableBound = "true";

    let startX = 0;
    let startY = 0;
    let initialX = Number(note.dataset.x || 0);
    let initialY = Number(note.dataset.y || 0);

    note.style.setProperty("--tx", `${initialX}px`);
    note.style.setProperty("--ty", `${initialY}px`);

    const onPointerMove = (event) => {
      const nextX = initialX + (event.clientX - startX);
      const nextY = initialY + (event.clientY - startY);
      note.style.setProperty("--tx", `${nextX}px`);
      note.style.setProperty("--ty", `${nextY}px`);
    };

    const onPointerUp = (event) => {
      initialX = initialX + (event.clientX - startX);
      initialY = initialY + (event.clientY - startY);
      note.dataset.x = String(initialX);
      note.dataset.y = String(initialY);
      note.classList.remove("dragging");
      note.removeEventListener("pointermove", onPointerMove);
      note.removeEventListener("pointerup", onPointerUp);
      note.removeEventListener("pointercancel", onPointerUp);
      note.releasePointerCapture(event.pointerId);
    };

    note.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      startX = event.clientX;
      startY = event.clientY;
      note.classList.add("dragging");
      note.setPointerCapture(event.pointerId);
      note.addEventListener("pointermove", onPointerMove);
      note.addEventListener("pointerup", onPointerUp);
      note.addEventListener("pointercancel", onPointerUp);
    });
  });
}

function openImageLightbox(src, altText) {
  if (!imageLightbox || !imageLightboxImg) return;
  imageLightboxImg.src = src;
  imageLightboxImg.alt = altText || "Preview image";
  imageLightbox.classList.add("open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeImageLightbox() {
  if (!imageLightbox || !imageLightboxImg) return;
  imageLightbox.classList.remove("open");
  imageLightbox.setAttribute("aria-hidden", "true");
  imageLightboxImg.src = "";
  document.body.classList.remove("lightbox-open");
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  renderContent(currentLang);
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && e.target !== menuToggle && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  }

  const poster = e.target.closest(".research-work-poster, .project-poster");
  if (poster && poster.getAttribute("src")) {
    openImageLightbox(poster.getAttribute("src"), poster.getAttribute("alt"));
  }
});

if (imageLightboxClose) {
  imageLightboxClose.addEventListener("click", closeImageLightbox);
}

if (imageLightbox) {
  imageLightbox.addEventListener("click", (e) => {
    if (e.target === imageLightbox) {
      closeImageLightbox();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && imageLightbox?.classList.contains("open")) {
    closeImageLightbox();
  }
});

loadPersistedContent();
renderContent(currentLang);
bindScrollState();
