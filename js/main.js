// Helpers
const $ = (sel) => document.querySelector(sel);

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  $("#year").textContent = new Date().getFullYear();

  // Mobile nav toggle (simple)
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      links.style.display = expanded ? "none" : "flex";
      links.style.flexDirection = "column";
      links.style.gap = "12px";
      links.style.position = "absolute";
      links.style.right = "20px";
      links.style.top = "62px";
      links.style.padding = "14px";
      links.style.borderRadius = "14px";
      links.style.border = "1px solid rgba(255,255,255,.12)";
      links.style.background = "rgba(18,24,38,.95)";
      links.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    });

    // close menu when clicking a link
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 680px)").matches) {
          links.style.display = "none";
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Modal (criteria)
  const modal = $("#criteriaModal");
  const openBtn = $("#openCriteria");
  const closeBtn = $("#closeCriteria");

  const openModal = () => {
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (openBtn && modal) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      const target = e.target;
      if (target?.dataset?.close === "true") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
    });
  }

  // Radar chart (1-10)
  const ctx = document.getElementById("skillsRadar");
  if (ctx) {
    const labels = [
      "Metodologia",
      "Análise de dados",
      "Tratamento de dados",
      "Python",
      "R",
      "SQL",
      "AWS Services",
      "Git"
    ];

    // Placeholder values (1–10). Você ajusta depois.
    const values = [8, 8, 7, 8, 6, 7, 4, 5];

    // Tooltip descriptions (o texto que aparece ao passar por cima)
    const descriptions = {
      "Metodologia": "Desenho de pesquisa, definição de indicadores, hipóteses, recortes e critérios; foco em decisão.",
      "Análise de dados": "EDA, estatística aplicada, segmentações, insights acionáveis, síntese e narrativa.",
      "Tratamento de dados": "Limpeza, padronização, deduplicação, joins, validações, dicionário e pipelines.",
      "Python": "Automação de rotinas, ETL, APIs, pandas, notebooks, scripts reprodutíveis e organização de projeto.",
      "R": "Análise estatística, exploração, visualizações e scripts para estudos e relatórios.",
      "SQL": "Consultas complexas, CTEs, modelagem, performance básica e extração confiável.",
      "AWS Services": "Noções e prática em evolução (ex.: armazenamento, deploy, serviços gerenciados — ajustar ao seu foco).",
      "Git": "Controle de versão, organização de branches, PRs, documentação e workflows em evolução."
    };

    const chart = new Chart(ctx, {
      type: "radar",
      data: {
        labels,
        datasets: [{
          label: "Nível (1–10)",
          data: values,
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              stepSize: 2,
              showLabelBackdrop: false
            },
            grid: {
              circular: true
            },
            pointLabels: {
              font: { size: 12 }
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => items?.[0]?.label ?? "",
              label: (item) => {
                const label = item.label;
                const v = item.raw;
                return [`Nível: ${v}/10`, descriptions[label] || ""];
              }
            }
          }
        }
      }
    });
  }

  // Form submit (Formspree)
  const form = $("#leadForm");
  const status = $("#formStatus");

  if (form && status) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "Enviando...";

      try {
        const resp = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (resp.ok) {
          status.textContent = "Mensagem enviada! Vou te responder em breve.";
          form.reset();
        } else {
          status.textContent = "Não consegui enviar agora. Tente novamente ou me chame por e-mail.";
        }
      } catch {
        status.textContent = "Falha de conexão. Tente novamente.";
      }
    });
  }
});
