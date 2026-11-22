(function () {
  const STORAGE_COMPLETED = "swm_completed_v1";
  const STORAGE_LAST = "swm_last_lesson_v1";
  const STORAGE_THEME = "swm_theme_v1";

  const catalog = Array.isArray(window.STUDY_CATALOG) ? window.STUDY_CATALOG : [];

  const state = {
    section: "all",
    status: "all",
    query: "",
    completed: new Set(JSON.parse(localStorage.getItem(STORAGE_COMPLETED) || "[]"))
  };

  // Theme initialization
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    const icon = document.getElementById("themeIcon");
    const label = document.getElementById("themeLabel");
    if (icon && label) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
      label.textContent = theme === "dark" ? "الفاتح" : "الداكن";
    }
  }

  const savedTheme = localStorage.getItem(STORAGE_THEME);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  function saveCompleted() {
    localStorage.setItem(STORAGE_COMPLETED, JSON.stringify([...state.completed]));
  }

  function toggleCompleted(lessonId) {
    if (state.completed.has(lessonId)) {
      state.completed.delete(lessonId);
    } else {
      state.completed.add(lessonId);
    }
    saveCompleted();
    renderAll();
  }

  function updateStats() {
    const allItems = catalog.flatMap((s) => s.items);
    const totalLessons = allItems.length;
    const completedCount = allItems.filter((i) => state.completed.has(i.id)).length;
    const totalMinutes = allItems.reduce((sum, i) => sum + (i.durationMinutes || 0), 0);
    const hoursText = (totalMinutes / 60).toFixed(1) + " س";
    const pct = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

    document.getElementById("statSections").textContent = catalog.length;
    document.getElementById("statLessons").textContent = totalLessons;
    document.getElementById("statCompleted").textContent = completedCount;
    document.getElementById("statHours").textContent = hoursText;
    document.getElementById("statPercent").textContent = pct + "%";
    document.getElementById("overallProgressFill").style.width = pct + "%";
  }

  function updateContinueBanner() {
    const lastId = localStorage.getItem(STORAGE_LAST);
    const banner = document.getElementById("continueBanner");
    if (!lastId || !banner) return;

    const allItems = catalog.flatMap((s) => s.items.map((item) => ({ ...item, sectionTitle: s.title })));
    const found = allItems.find((i) => i.id === lastId);
    if (!found) return;

    document.getElementById("continueTitle").textContent = `${found.sectionTitle} — ${found.title}`;
    document.getElementById("continueLink").href = `study.html?id=${encodeURIComponent(found.id)}`;
    banner.classList.add("visible");
  }

  function renderTabs() {
    const tabsEl = document.getElementById("sectionTabs");
    if (!tabsEl) return;

    const totalCount = catalog.reduce((sum, s) => sum + s.items.length, 0);
    const buttons = [
      { id: "all", label: `📚 كل الأقسام (${totalCount})` },
      ...catalog.map((s) => ({
        id: s.id,
        label: `${s.icon || "📁"} ${s.folder} (${s.items.length})`
      }))
    ];

    tabsEl.innerHTML = buttons
      .map(
        (b) =>
          `<button class="tab-btn ${state.section === b.id ? "active" : ""}" data-section="${b.id}" type="button">${b.label}</button>`
      )
      .join("");

    tabsEl.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.section = btn.dataset.section;
        renderTabs();
        renderSections();
      });
    });
  }

  function matchesFilter(item) {
    const isDone = state.completed.has(item.id);
    if (state.status === "done" && !isDone) return false;
    if (state.status === "pending" && isDone) return false;

    if (state.query.trim()) {
      const q = state.query.trim().toLowerCase();
      const haystack = [item.title, item.titleEn, item.description, item.subfolder, ...(item.tags || [])]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  }

  function renderSections() {
    const container = document.getElementById("sectionsContainer");
    if (!container) return;

    const visibleSections = catalog.filter((s) => state.section === "all" || s.id === state.section);
    let renderedCount = 0;

    const html = visibleSections
      .map((section) => {
        const filteredItems = section.items.filter(matchesFilter);
        if (!filteredItems.length) return "";
        renderedCount += filteredItems.length;

        const sectionCompleted = section.items.filter((i) => state.completed.has(i.id)).length;
        const sectionPct = section.items.length ? Math.round((sectionCompleted / section.items.length) * 100) : 0;

        const cardsHtml = filteredItems
          .map((item) => {
            const done = state.completed.has(item.id);
            const rawUrl = encodeURI(item.file);
            const readerUrl = `study.html?id=${encodeURIComponent(item.id)}`;
            const tagsHtml = (item.tags || [])
              .slice(0, 3)
              .map((t) => `<span class="tag">${t}</span>`)
              .join("");

            return `
              <article class="lesson-card ${done ? "completed" : ""}" style="--section-accent: ${section.accent}">
                <div>
                  <div class="card-top">
                    <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
                      <span class="lesson-num">الدرس ${item.order}</span>
                      ${item.subfolder ? `<span class="subfolder-pill en">${item.subfolder}</span>` : ""}
                    </div>
                    <button class="done-toggle ${done ? "active" : ""}" data-toggle="${item.id}" type="button">
                      ${done ? "✓ مكتمل" : "○ تحديد كمكتمل"}
                    </button>
                  </div>

                  <div class="card-body" style="margin-top: 12px;">
                    <h3>${item.title}</h3>
                    ${item.titleEn ? `<div class="card-title-en en">${item.titleEn}</div>` : ""}
                    <p class="card-desc">${item.description}</p>
                  </div>
                </div>

                <div>
                  <div class="card-tags">${tagsHtml}</div>
                  <div class="card-footer" style="margin-top: 12px;">
                    <span class="duration">⏱️ ${item.duration}</span>
                    <div class="card-actions">
                      <a class="btn ghost sm" href="${rawUrl}" target="_blank" rel="noopener" title="فتح الملف مباشرة">↗</a>
                      <a class="btn sm" style="background: ${section.accent}" href="${readerUrl}">ابدأ المذاكرة</a>
                    </div>
                  </div>
                </div>
              </article>
            `;
          })
          .join("");

        return `
          <section class="section-block" id="section-${section.id}">
            <div class="section-header">
              <div class="section-banner" style="background: ${section.gradient}">
                <div class="section-title-wrap">
                  <div class="section-icon">${section.icon || "📚"}</div>
                  <div>
                    <h2>${section.title} <span class="en" style="opacity:.9;font-size:.95rem;">(${section.folder})</span></h2>
                    <p>${section.subtitle}</p>
                  </div>
                </div>
                <div class="hero-badges" style="margin-top:0;">
                  <span class="badge">${section.language}</span>
                  <span class="badge">${section.level}</span>
                </div>
              </div>
              <div class="section-meta">
                <span>${section.description}</span>
                <div class="section-progress-wrap">
                  <span>${sectionCompleted}/${section.items.length}</span>
                  <div class="section-progress-bar">
                    <div style="width: ${sectionPct}%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cards-grid">${cardsHtml}</div>
          </section>
        `;
      })
      .join("");

    if (!renderedCount) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>لم يتم العثور على دروس مطابقة 🔍</h3>
          <p>جرّب تغيير كلمات البحث أو إزالة الفلاتر الحالية.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = html;
    container.querySelectorAll("[data-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => toggleCompleted(btn.dataset.toggle));
    });
  }

  function renderAll() {
    updateStats();
    updateContinueBanner();
    renderTabs();
    renderSections();
  }

  document.getElementById("searchInput")?.addEventListener("input", (e) => {
    state.query = e.target.value;
    renderSections();
  });

  document.querySelectorAll("[data-status]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.status = btn.dataset.status;
      document.querySelectorAll("[data-status]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSections();
    });
  });

  renderAll();
})();
