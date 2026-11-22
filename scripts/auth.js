(function () {
  // SHA-256 hash of "username:password"
  // Default: admin / StudyWithMe2026
  // To change it, run: python3 scripts/set_password.py
  const EXPECTED_HASH = "9e6e8eee8357b5fa13221da03466fcda8ea489c0d1f11dfdd99f8aea611a7ca8";
  const STORAGE_AUTH = "swm_auth_token_v1";

  async function sha256Hex(text) {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function isAuthenticated() {
    return localStorage.getItem(STORAGE_AUTH) === EXPECTED_HASH;
  }

  function unlockApp() {
    document.documentElement.classList.remove("auth-locked");
    const gate = document.getElementById("authGate");
    if (gate) gate.remove();
  }

  function lockApp() {
    localStorage.removeItem(STORAGE_AUTH);
    document.documentElement.classList.add("auth-locked");
    renderGate();
  }

  function renderGate() {
    if (document.getElementById("authGate")) return;

    const gate = document.createElement("div");
    gate.id = "authGate";
    gate.className = "auth-gate";
    gate.innerHTML = `
      <div class="auth-card">
        <div class="auth-header">
          <img src="assets/logo.svg" alt="Study With Me Logo" class="auth-logo">
          <h1 class="en">Study With Me</h1>
          <p>بوابة خاصة — سجّل الدخول للوصول إلى المواد الدراسية</p>
        </div>

        <form id="authForm" class="auth-form">
          <label class="auth-field">
            <span>اسم المستخدم</span>
            <input id="authUser" type="text" autocomplete="username" placeholder="admin" required>
          </label>
          <label class="auth-field">
            <span>كلمة المرور</span>
            <input id="authPass" type="password" autocomplete="current-password" placeholder="••••••••" required>
          </label>
          <div id="authError" class="auth-error" role="alert"></div>
          <button type="submit" class="btn auth-submit">تسجيل الدخول ←</button>
        </form>
      </div>
    `;

    document.body.appendChild(gate);

    const form = document.getElementById("authForm");
    const errorEl = document.getElementById("authError");
    const userInput = document.getElementById("authUser");
    const passInput = document.getElementById("authPass");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      errorEl.textContent = "";
      const username = userInput.value.trim();
      const password = passInput.value;
      const digest = await sha256Hex(`${username}:${password}`);

      if (digest === EXPECTED_HASH) {
        localStorage.setItem(STORAGE_AUTH, EXPECTED_HASH);
        unlockApp();
      } else {
        errorEl.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
        passInput.value = "";
        passInput.focus();
      }
    });
  }

  // Lock immediately before paint if not authenticated
  if (!isAuthenticated()) {
    document.documentElement.classList.add("auth-locked");
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!isAuthenticated()) {
      renderGate();
    } else {
      unlockApp();
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", lockApp);
    }
  });
})();
