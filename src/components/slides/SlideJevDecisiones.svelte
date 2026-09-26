<div class="swiper-slide">
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto II · La capa de decisión</span></div>
    <h2 class="title">Las microdecisiones no necesitan <span class="hl">otro agente</span></h2>
    <p class="lead">Jev propone una capa para las bifurcaciones pequeñas: devuelve una elección, un score o una probabilidad calibrada. El orquestador conserva el trabajo complejo.</p>

    <div class="comparison">
      <section class="patterns" aria-label="Patrones que Jev puede aligerar">
        <p class="section-label">Donde puede sustituir una llamada al LLM</p>

        <div class="pattern-row">
          <span class="pattern-name">Routing</span>
          <p>Elegir el worker o el modelo para una petición.</p>
          <code>choice</code>
        </div>

        <div class="pattern-row">
          <span class="pattern-name">HITL / HOTL</span>
          <p>Decidir si una acción pasa, se bloquea o requiere revisión.</p>
          <code>noul</code>
        </div>

        <div class="pattern-row">
          <span class="pattern-name">Contexto</span>
          <p>Valorar qué resultado conservar antes de que sature la sesión.</p>
          <code>score</code>
        </div>
      </section>

      <section class="jev-core" aria-label="Jev como capa de decisiones">
        <p class="core-kicker">Jev · System One</p>
        <div class="core-ring">
          <span class="ring-top">estado + pregunta</span>
          <strong>Decisión<br />tipada</strong>
          <span class="ring-bottom">confianza calibrada</span>
        </div>
        <p class="core-caption">Valores sobre los que el código ramifica directamente, sin interpretar una respuesta en prosa.</p>
      </section>
    </div>

    <div class="boundary">
      <strong>El límite importa:</strong> Jev puede decidir el siguiente paso, pero no sustituye a Creator-Verifier ni a Orchestrator-Workers cuando hay que crear, coordinar y comprobar un artefacto.
    </div>

    <a class="source" href="https://jevtypesafeai.com/es/what-is-jev" target="_blank" rel="noopener noreferrer">Fuente: documentación de Jev · decisiones tipadas, choice, score y noul</a>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1100px; width: 100%; padding: var(--spacing-content); padding-top: 3rem; display: flex; flex-direction: column; gap: var(--spacing-md); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #93c5fd; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #3B82F6; box-shadow: 0 0 6px rgba(59, 130, 246, 0.6); }
  .title { font-size: clamp(1.8rem, 4vw, 2.7rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #3B82F6, #93c5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .lead { max-width: 770px; margin-bottom: 0; color: var(--color-neutral-light); opacity: 0.72; font-size: 0.95rem; line-height: 1.5; }

  .comparison { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: var(--spacing-2xl); align-items: stretch; }
  .patterns { display: flex; flex-direction: column; border-top: 1px solid rgba(96, 165, 250, 0.32); }
  .section-label { margin: var(--spacing-md) 0 var(--spacing-sm); font-family: var(--font-mono); color: #93c5fd; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
  .pattern-row { display: grid; grid-template-columns: 126px 1fr auto; align-items: center; gap: var(--spacing-md); padding: var(--spacing-md) 0; border-top: 1px solid rgba(96, 165, 250, 0.16); }
  .pattern-name { color: var(--color-neutral-light); font-family: var(--font-mono); font-size: 0.9rem; font-weight: 800; }
  .pattern-row p { margin: 0; color: var(--color-neutral-light); font-size: 0.88rem; line-height: 1.45; opacity: 0.68; }
  code { padding: 4px 8px; border: 1px solid rgba(134, 239, 172, 0.35); border-radius: 4px; color: #86efac; background: rgba(34, 197, 94, 0.08); font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; }

  .jev-core { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--spacing-sm); min-height: 220px; overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.35); border-radius: var(--radius-lg); background: radial-gradient(circle at 50% 44%, rgba(59, 130, 246, 0.22), rgba(7, 28, 53, 0.16) 62%); text-align: center; }
  .core-kicker { margin: 0; color: #93c5fd; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 800; letter-spacing: 0.13em; }
  .core-ring { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 142px; height: 142px; border: 1px solid rgba(147, 197, 253, 0.6); border-radius: 50%; box-shadow: 0 0 0 12px rgba(59, 130, 246, 0.06), 0 0 32px rgba(59, 130, 246, 0.18); }
  .core-ring strong { color: var(--color-neutral-light); font-size: 1.3rem; line-height: 1.04; }
  .ring-top, .ring-bottom { color: #bfdbfe; font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.04em; opacity: 0.72; }
  .ring-top { margin-bottom: var(--spacing-sm); }
  .ring-bottom { margin-top: var(--spacing-sm); }
  .core-caption { max-width: 310px; margin: 0; color: var(--color-neutral-light); font-size: 0.78rem; line-height: 1.45; opacity: 0.62; }

  .boundary { padding: var(--spacing-sm) var(--spacing-md); border-left: 3px solid #f59e0b; background: rgba(245, 158, 11, 0.06); color: var(--color-neutral-light); font-size: 0.82rem; line-height: 1.45; opacity: 0.82; }
  .boundary strong { color: #fcd34d; }
  .source { align-self: flex-end; color: #93c5fd; font-family: var(--font-mono); font-size: 0.66rem; opacity: 0.6; text-decoration: none; }
  .source:hover { opacity: 1; text-decoration: underline; }

  @media (max-width: 800px) {
    .comparison { grid-template-columns: 1fr; }
    .jev-core { min-height: 240px; }
  }

  @media (max-width: 560px) {
    .pattern-row { grid-template-columns: 1fr auto; }
    .pattern-row p { grid-column: 1 / -1; }
    .source { align-self: flex-start; }
  }
</style>
