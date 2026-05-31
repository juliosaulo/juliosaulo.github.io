// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Helper simples
  const $ = (selector) => document.querySelector(selector);

  // Ano automático no rodapé
  const year = $("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isExpanded));
      links.classList.toggle("is-open", !isExpanded);
    });

    // Fecha o menu ao clicar em algum link
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
      });
    });
  }

  // Formulário de contato
  const form = $("#leadForm");
  const status = $("#formStatus");

  if (form && status) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      status.textContent = "Enviando...";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          status.textContent = "Mensagem enviada! Vou te responder em breve.";
          form.reset();
        } else {
          status.textContent =
            "Não consegui enviar agora. Tente novamente ou me chame por e-mail.";
        }
      } catch (error) {
        status.textContent =
          "Falha de conexão. Tente novamente ou me chame por e-mail.";
      }
    });
  }
});