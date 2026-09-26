<script lang="ts">
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
</script>

<div class="swiper-slide">
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto II · La capa de decisión</span></div>
    <h2 class="title">Las microdecisiones no necesitan <span class="hl">otro agente</span></h2>
    <p class="lead">Jev propone una capa para las bifurcaciones pequeñas: devuelve una elección, un score o una probabilidad calibrada. El orquestador conserva el trabajo complejo.</p>

    <div class="comparison">
      <section class="patterns" aria-label="Ejemplo oficial de workflow">
        <p class="section-label">Ejemplo oficial · Expense claims</p>

        <div class="policy-box">
          <span class="box-label">Política escrita</span>
          <p>Si el recibo no se lee, pide otro. Clasifica el gasto. Una comida de más de 75 $ con una descripción que no coincide requiere aprobación.</p>
        </div>

        <div class="workflow-box">
          <span class="box-label">Preguntas estrechas</span>
          <div class="type-row"><code>noul</code><span>¿Se puede leer el recibo?</span></div>
          <div class="type-row"><code>choice</code><span>meal · travel · equipment</span></div>
          <div class="type-row"><code>score</code><span>¿Cuánto coincide la descripción?</span></div>
          <p class="rule-line"><strong>Regla en código:</strong> meal &gt; 75 $ + mismatch → manager</p>
        </div>
      </section>

      <figure class="jev-visual">
        <img src={base + 'jev-decision-layer.png'} alt="Un núcleo de decisión recibe señales de contexto y las distribuye en tres rutas técnicas" loading="lazy" />
        <figcaption>Estado y pregunta dentro. Decisión tipada fuera.</figcaption>
      </figure>
    </div>

    <div class="boundary">
      <strong>El límite importa:</strong> Jev puede decidir el siguiente paso, pero no sustituye a Creator-Verifier ni a Orchestrator-Workers cuando hay que crear, coordinar y comprobar un artefacto.
    </div>

    <a class="source" href="https://evals.typesafe.ai/" target="_blank" rel="noopener noreferrer">Fuente oficial: TypeSafe · Workflow evals</a>
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
  .policy-box, .workflow-box { display: flex; flex-direction: column; gap: var(--spacing-sm); padding: var(--spacing-md); border: 1px solid rgba(96, 165, 250, 0.17); background: rgba(30, 58, 138, 0.1); }
  .policy-box { border-radius: var(--radius-sm) var(--radius-sm) 0 0; }
  .workflow-box { border-top: 0; border-radius: 0 0 var(--radius-sm) var(--radius-sm); }
  .box-label { color: #93c5fd; font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
  .policy-box p { margin: 0; color: var(--color-neutral-light); font-size: 0.82rem; line-height: 1.48; opacity: 0.72; }
  .type-row { display: grid; grid-template-columns: 58px 1fr; align-items: center; gap: var(--spacing-sm); color: var(--color-neutral-light); font-size: 0.8rem; line-height: 1.35; }
  .rule-line { margin: var(--spacing-xs) 0 0; color: #fcd34d; font-family: var(--font-mono); font-size: 0.7rem; line-height: 1.4; }
  .rule-line strong { color: #f59e0b; }
  code { padding: 4px 8px; border: 1px solid rgba(134, 239, 172, 0.35); border-radius: 4px; color: #86efac; background: rgba(34, 197, 94, 0.08); font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; }

  .jev-visual { position: relative; display: flex; flex-direction: column; align-items: stretch; justify-content: center; gap: var(--spacing-sm); min-height: 220px; margin: 0; overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.35); border-radius: var(--radius-lg); background: rgba(7, 28, 53, 0.24); text-align: center; }
  .jev-visual img { width: 100%; height: 220px; display: block; object-fit: cover; }
  .jev-visual figcaption { padding: 0 var(--spacing-md) var(--spacing-md); color: #bfdbfe; font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.04em; opacity: 0.78; }

  .boundary { padding: var(--spacing-sm) var(--spacing-md); border-left: 3px solid #f59e0b; background: rgba(245, 158, 11, 0.06); color: var(--color-neutral-light); font-size: 0.82rem; line-height: 1.45; opacity: 0.82; }
  .boundary strong { color: #fcd34d; }
  .source { align-self: flex-end; color: #93c5fd; font-family: var(--font-mono); font-size: 0.66rem; opacity: 0.6; text-decoration: none; }
  .source:hover { opacity: 1; text-decoration: underline; }

  @media (max-width: 800px) {
    .comparison { grid-template-columns: 1fr; }
    .jev-visual, .jev-visual img { min-height: 240px; height: 240px; }
  }

  @media (max-width: 560px) {
    .source { align-self: flex-start; }
  }
</style>
