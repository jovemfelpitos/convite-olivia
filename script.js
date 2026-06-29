const GOOGLE_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";

// Troque estes valores para atualizar o convite sem mexer no HTML.
const SITE_CONFIG = {
  nomeAniversariante: "Olívia",
  data: "04/07/2026 - 20:00",
  local: "Guarulhos - SP",
  imagemConvite: "assets/convite.png",
  fotos: ["assets/foto1.jpg", "assets/foto2.jpg", "assets/foto3.jpg"],
};

const form = document.querySelector("#rsvpForm");
const nameInput = document.querySelector("#guestName");
const submitButton = document.querySelector("#submitButton");
const formMessage = document.querySelector("#formMessage");

document.addEventListener("DOMContentLoaded", () => {
  applySiteConfig();
  initScrollReveal();
  initRsvpForm();
});

function applySiteConfig() {
  document.documentElement.style.setProperty(
    "--invite-image",
    `url("${SITE_CONFIG.imagemConvite}")`
  );

  document.querySelector("[data-event-date]").textContent = SITE_CONFIG.data;
  document.querySelector("[data-event-place]").textContent = SITE_CONFIG.local;

  document.querySelectorAll("[data-photo-index]").forEach((image) => {
    const index = Number(image.dataset.photoIndex);
    const source = SITE_CONFIG.fotos[index];

    if (source) {
      image.src = source;
      image.alt = `Foto ${index + 1} da ${SITE_CONFIG.nomeAniversariante}`;
    }
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
