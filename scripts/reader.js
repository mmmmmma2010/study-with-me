(function () {
  const STORAGE_COMPLETED = "swm_completed_v1";
  const STORAGE_LAST = "swm_last_lesson_v1";
  const STORAGE_THEME = "swm_theme_v1";

  const savedTheme = localStorage.getItem(STORAGE_THEME);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", savedTheme || (prefersDark ? "dark" : "light"));

  const catalog = Array.isArray(window.STUDY_CATALOG) ? window.STUDY_CATALOG : [];
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("id");

  const flatLessons = catalog.flatMap((section) =>
    section.items.map((item) => ({ ...item, sectionTitle: section.title, sectionId: section.id }))
  );

  const idx = flatLessons.findIndex((item) => item.id === lessonId);
  const lesson = idx >= 0 ? flatLessons[idx] : flatLessons[0];

  if (!lesson) {
    document.getElementById("readerTitle").textContent = "لم يتم العثور على الدرس";
    return;
  }

  localStorage.setItem(STORAGE_LAST, lesson.id);
  document.title = `${lesson.title} — Study With Me`;
  document.getElementById("readerTitle").textContent = `${lesson.sectionTitle} · ${lesson.title}`;

  const encodedFile = encodeURI(lesson.file);
  document.getElementById("lessonFrame").src = encodedFile;
  document.getElementById("rawBtn").href = encodedFile;

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (idx > 0) {
    prevBtn.href = `study.html?id=${encodeURIComponent(flatLessons[idx - 1].id)}`;
  } else {
    prevBtn.style.opacity = "0.4";
    prevBtn.style.pointerEvents = "none";
  }

  if (idx >= 0 && idx < flatLessons.length - 1) {
    nextBtn.href = `study.html?id=${encodeURIComponent(flatLessons[idx + 1].id)}`;
  } else {
    nextBtn.style.opacity = "0.4";
    nextBtn.style.pointerEvents = "none";
  }

  const doneBtn = document.getElementById("readerDoneBtn");
  let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_COMPLETED) || "[]"));

  function syncDoneBtn() {
    const isDone = completed.has(lesson.id);
    doneBtn.classList.toggle("active", isDone);
    doneBtn.textContent = isDone ? "✓ مكتمل" : "○ تحديد كمكتمل";
  }

  doneBtn.addEventListener("click", () => {
    if (completed.has(lesson.id)) {
      completed.delete(lesson.id);
    } else {
      completed.add(lesson.id);
    }
    localStorage.setItem(STORAGE_COMPLETED, JSON.stringify([...completed]));
    syncDoneBtn();
  });

  syncDoneBtn();
})();
