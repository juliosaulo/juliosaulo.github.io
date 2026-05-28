Plano de Deep Dive do seu site (GitHub Pages)
Etapa 0 — Mapa do projeto e “como não se perder”

Objetivo: você entender a estrutura do repo e o papel de cada arquivo.

O que vamos cobrir

O que é index.html, css/styles.css, js/main.js

O que são pastas assets/

Como o navegador “liga” HTML + CSS + JS

Como achar erros rápido (DevTools Console + Network)

Exercício

Comentar/descomentar uma linha de CSS pra ver efeito imediato

Alterar um texto no HTML e ver atualizar

Abrir DevTools e identificar onde o CSS está carregando

✅ Quando você dominar: você sabe “onde fica o quê” e como debugar.

Etapa 1 — Hero (apresentação) e navegação por âncoras

Objetivo: você dominar a “vitrine” do site.

O que vamos cobrir

Estrutura do HTML do Hero (foto, h1, subtítulo, parágrafo, botões)

O que são classes no HTML e como elas ligam no CSS

Botões/links: diferença entre <a> e <button>

Scroll suave e IDs (ex.: href="#trajetoria")

Exercício

Trocar texto do hero para seu “pitch” real

Ajustar botões (ordem, texto)

Trocar chips (Python, SQL etc.)

Ajustar tamanho da foto e borda no CSS

✅ Quando você dominar: você consegue deixar o topo “com sua cara” sem medo.

Etapa 2 — Tipografia, cores, espaçamento (o “DNA visual”)

Objetivo: você aprender a alterar o design global do site sem quebrar layout.

O que vamos cobrir

Variáveis CSS no :root (cores, radius, sombra)

Hierarquia de texto (h1, h2, p, .muted, .small)

Como ajustar “sensação” do site (mais clean, mais forte, mais leve)

Como escolher 1 cor de destaque e não exagerar

Exercício

Mudar a cor de destaque (--accent) e ver efeitos

Ajustar --radius e perceber o “estilo”

Ajustar fontes e espaçamentos do hero

✅ Quando você dominar: você consegue “re-skin” o site inteiro.

Etapa 3 — Timeline (trajetória) sem dor

Objetivo: você dominar um componente repetível (cards + linha + tags).

O que vamos cobrir

Como o CSS desenha a linha (:before) e os pontos

Como duplicar/remover itens

Como escrever as 7 entradas bem “escaneáveis”

Como usar tags sem virar poluição visual

Exercício

Preencher 2 entradas reais (as outras podem ficar placeholder)

Trocar tags

Testar no mobile (responsivo)

✅ Quando você dominar: você consegue manter a trajetória sempre atualizada.

Etapa 4 — Radar de habilidades (o “difícil”, mas com método)

Objetivo: você entender como o gráfico é gerado e como mexer nele com segurança.

O que vamos cobrir

O que é Chart.js e o que é um <canvas>

Onde estão: labels, values, descriptions

Como o tooltip funciona (callbacks)

Como mudar escala, labels, ordem, valores

Como marcar “em evolução” (lista lateral + coerência com tooltip)

Exercício

Trocar 2 labels e ajustar o tooltip correspondente

Ajustar 3 valores e conferir visual

Ajustar a lista “Em evolução agora”

✅ Quando você dominar: você consegue manter o radar honesto e útil.

Etapa 5 — Modal dos critérios (interação com JS)

Objetivo: você entender manipulação de DOM sem “medo do JavaScript”.

O que vamos cobrir

aria-hidden, acessibilidade básica

openModal() / closeModal() e eventos (click, Escape)

Como editar o conteúdo do modal no HTML

Como criar um segundo modal no futuro (se quiser)

Exercício

Editar sua rubrica real (1–10)

Alterar o texto e organização

Testar abertura/fechamento

✅ Quando você dominar: você entende como “interações” são feitas no site.

Etapa 6 — Serviços + formulário (lead capture de verdade)

Objetivo: você ter um canal de contato funcionando e bem escrito.

O que vamos cobrir

Cards de serviço: como escrever oferta sem prometer demais

Formspree: onde colar o endpoint

Mensagem de sucesso/erro (JS)

Antispam simples (honeypot opcional)

Alternativa: mailto + WhatsApp (se quiser)

Exercício

Ajustar os 3 serviços para seu posicionamento real

Trocar o action do form (quando você criar)

Testar envio

✅ Quando você dominar: seu site começa a gerar lead.

Etapa 7 — Responsividade e polimento final

Objetivo: garantir que no celular fique bonito e usável.

O que vamos cobrir

Media queries já existentes

Ajustes de fonte/spacing no mobile

Menu mobile (nav-toggle) e melhorias

Exercício

Testar 3 larguras (mobile, tablet, desktop)

Ajustar 2 pontos que te incomodarem

✅ Quando você dominar: o site fica “pronto pra público”.

Etapa 8 — Próximos upgrades (quando você quiser)

seção “Projetos”

SEO básico (meta tags melhores)

Analytics

domínio próprio

performance (lazy loading imagem, compressão)