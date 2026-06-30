const GOOGLE_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";

// Troque estes valores para atualizar o convite sem mexer no HTML.
const SITE_CONFIG = {
  nomeAniversariante: "Olívia",
  data: "04/07/2026 - 20:00",
  local: "Guarulhos - SP",
  imagemConvite: "assets/convite.png",
};

const INVITE_CHAPTERS = {
  noite:
    "Dia 04/07/2026, às 20h, a festa começa em Guarulhos - SP. Chegue com o coração leve: a noite foi preparada para ser inesquecível.",
  salao:
    "Imagine um salão âmbar, detalhes dourados, risadas no ar e uma mesa pronta para receber quem faz parte da história da Olívia.",
  brinde:
    "O presente mais bonito é ter você por perto. Confirme seu nome e venha brindar esse novo capítulo com a gente.",
};

const form = document.querySelector("#rsvpForm");
const nameInput = document.querySelector("#guestName");
const submitButton = document.querySelector("#submitButton");
const formMessage = document.querySelector("#formMessage");

document.addEventListener("DOMContentLoaded", () => {
  applySiteConfig();
  initScrollReveal();
  initInviteChapters();
  initRsvpForm();
});

function applySiteConfig() {
  document.documentElement.style.setProperty(
    "--invite-image",
    `url("${SITE_CONFIG.imagemConvite}")`
  );

  document.querySelectorAll("[data-event-date]").forEach((item) => {
    item.textContent = SITE_CONFIG.data;
  });

  document.querySelectorAll("[data-event-place]").forEach((item) => {
    item.textContent = SITE_CONFIG.local;
  });
}

function initScrollReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initInviteChapters() {
  const buttons = document.querySelectorAll("[data-invite-key]");
  const chapterText = document.querySelector("#inviteChapterText");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.inviteKey;
      const text = INVITE_CHAPTERS[key];

      if (!text) {
        return;
      }

      buttons.forEach((item) => {
        const isCurrent = item === button;
        item.classList.toggle("is-active", isCurrent);
        item.setAttribute("aria-selected", String(isCurrent));
      });

      chapterText.classList.remove("is-changing");
      requestAnimationFrame(() => {
        chapterText.textContent = text;
        chapterText.classList.add("is-changing");
      });
    });
  });
}

function initRsvpForm() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = normalizeName(nameInput.value);

    if (!nome) {
      showMessage("Digite seu nome completo para confirmar.", "error");
      nameInput.focus();
      return;
    }

    if (!isGoogleScriptConfigured()) {
      showMessage("Configure a URL do Google Apps Script no arquivo script.js.", "error");
      return;
    }

    setLoading(true);
    showMessage("Enviando confirmação...", "info");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ nome }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await readJsonSafely(response);

      if (result?.status && result.status !== "success") {
        throw new Error("Resposta inesperada do Apps Script.");
      }

      form.reset();
      showMessage("Presença confirmada! Te esperamos no aniversário da Olívia 💛", "success");
    } catch (error) {
      showMessage(
        "Não foi possível confirmar agora. Confira sua conexão e tente novamente.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  });
}

function normalizeName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function isGoogleScriptConfigured() {
  return (
    GOOGLE_SCRIPT_URL &&
    GOOGLE_SCRIPT_URL.startsWith("https://") &&
    !GOOGLE_SCRIPT_URL.includes("COLE_AQUI")
  );
}

async function readJsonSafely(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "Confirmando..." : "Confirmar presença";
  form.setAttribute("aria-busy", String(isLoading));
}

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.classList.remove("is-error", "is-success");

  if (type === "error") {
    formMessage.classList.add("is-error");
  }

  if (type === "success") {
    formMessage.classList.add("is-success");
  }
}
