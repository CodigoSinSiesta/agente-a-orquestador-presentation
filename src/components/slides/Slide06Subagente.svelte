<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const contextBars = [
    {
      role: 'Agente principal',
      amount: '180\u202f000 de 200\u202f000',
      percentage: '90%',
      value: 90,
      tone: 'principal',
      detail: 'Historial, exploración, herramientas y decisiones acumuladas.'
    },
    {
      role: 'Sub-agente',
      amount: '40\u202f000 de 200\u202f000',
      percentage: '20%',
      value: 20,
      tone: 'subagent',
      detail: 'Solo el contexto necesario para una misión concreta.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="concept-badge"><span class="badge-num">Acto I · 04</span><span class="badge-emoji">🧩</span></div>
    <h2 class="title">El sub-agente: <span class="hl">delegar</span>, no clonar</h2>

    <div class="intro-row">
      <p class="lead">Como una fila de hormigas: la misma especie, la misma fuerza base — pero cada una carga algo distinto porque la tarea de turno lo pide, no porque haya cinco tipos de hormiga.</p>
      <div class="image-frame image-pair">
        <figure class="image-tile image-tile-roles">
          <img src={base + 'subagente-hormigas.png'} alt="Una fila de hormigas idénticas, cada una cargando un objeto distinto — la misma base, tareas especializadas" loading="lazy" />
          <figcaption>misma base · tareas distintas</figcaption>
        </figure>
        <figure class="image-tile image-tile-context">
          <img src={base + 'subagente-contexto.png'} alt="Un agente principal rodeado de contexto saturado y un sub-agente con una misión acotada, unidos por un handoff breve" loading="lazy" />
          <figcaption>contexto lleno · misión acotada</figcaption>
        </figure>
      </div>
    </div>

    <section class="context-compare" aria-labelledby="context-compare-title">
      <div class="compare-heading">
        <div>
          <p class="section-kicker">Una ventana de 200\u202f000 tokens</p>
          <h3 id="context-compare-title">Delegar mantiene <span>ligero</span> el hilo principal</h3>
        </div>
        <p class="compare-note">Escenario ilustrativo para visualizar el reparto de contexto, no una medición universal.</p>
      </div>

      <div class="context-grid">
        {#each contextBars as bar}
          <article class={`context-card ${bar.tone}`}>
            <div class="context-card-head">
              <span class="context-role">{bar.role}</span>
              <span class="context-percent">{bar.percentage}</span>
            </div>
            <div
              class="meter-track"
              role="progressbar"
              aria-label={`Contexto ocupado por ${bar.role}`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={bar.value}
            >
              <span class="meter-fill" style={`width: ${bar.value}%`}></span>
            </div>
            <div class="context-card-foot">
              <strong>{bar.amount}</strong>
              <span>{bar.detail}</span>
            </div>
          </article>
        {/each}
      </div>

      <div class="handoff-line">
        <span class="handoff-dot"></span>
        <span>El principal recibe un resumen de 3–5 líneas, no los 140\u202f000 tokens de ruido intermedio.</span>
      </div>
    </section>

    <div class="two-col">
      <div class="col-a">
        <h3 class="col-title col-title-a">Misión del sub-agente</h3>
        <div class="mission-box">
          <span class="mission-label">Entrada acotada</span>
          <strong>“Revisa este edge case y devuelve solo el hallazgo, la evidencia y la recomendación.”</strong>
        </div>
        <p class="mission-note">La tarea tiene un objetivo, una salida esperada y un contexto propio. El principal conserva la decisión final.</p>
      </div>
      <div class="col-b">
        <h3 class="col-title col-title-b">Cuándo compensa un sub-agente</h3>
        <p>Cuando la sub-tarea tiene un contexto propio que no necesita contaminar el hilo principal: una búsqueda exploratoria, una revisión de código, una investigación de una API externa.</p>
        <div class="evidence-chip">Regla práctica: si el resultado cabe en un resumen de 3–5 líneas, delega. Si necesitas todo el razonamiento intermedio, mantén el trabajo en el hilo principal.</div>
      </div>
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1100px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .concept-badge { display: flex; align-items: center; gap: var(--spacing-md); }
  .badge-num { font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #86efac; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3); padding: 4px 12px; border-radius: 999px; }
  .badge-emoji { font-size: 1.5rem; }

  .title { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #22c55e, #86efac); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-2xl); align-items: start; }
  .col-title { font-size: 1rem; font-weight: 700; margin-bottom: var(--spacing-md); font-family: var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; }
  .col-title-a { color: #f87171; }
  .col-title-b { color: #86efac; }
  .col-a, .col-b { display: flex; flex-direction: column; gap: var(--spacing-lg); }
  .col-b p { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }

  .context-compare { display: flex; flex-direction: column; gap: var(--spacing-md); }
  .compare-heading { display: flex; justify-content: space-between; align-items: end; gap: var(--spacing-xl); }
  .section-kicker { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-electric); margin-bottom: var(--spacing-xs); }
  .compare-heading h3 { font-size: 1.1rem; color: var(--color-neutral-light); margin: 0; }
  .compare-heading h3 span { color: #86efac; }
  .compare-note { max-width: 320px; font-size: 0.7rem; line-height: 1.45; color: var(--color-neutral-light); opacity: 0.45; text-align: right; margin: 0; }

  .context-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
  .context-card { background: rgba(30, 58, 138, 0.12); border: 1px solid rgba(96, 165, 250, 0.16); border-radius: var(--radius-md); padding: var(--spacing-md) var(--spacing-lg); }
  .context-card.principal { border-color: rgba(248, 113, 113, 0.28); }
  .context-card.subagent { border-color: rgba(134, 239, 172, 0.3); }
  .context-card-head, .context-card-foot { display: flex; justify-content: space-between; align-items: baseline; gap: var(--spacing-md); }
  .context-role { font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; letter-spacing: 0.05em; color: var(--color-neutral-light); text-transform: uppercase; }
  .context-percent { font-family: var(--font-mono); font-size: 1.1rem; font-weight: 800; }
  .principal .context-percent { color: #fca5a5; }
  .subagent .context-percent { color: #86efac; }
  .meter-track { height: 12px; margin: var(--spacing-md) 0; overflow: hidden; border-radius: 999px; background: rgba(250, 249, 246, 0.1); }
  .meter-fill { display: block; height: 100%; border-radius: inherit; transform-origin: left center; animation: meterIn 800ms ease-out both; }
  .principal .meter-fill { background: linear-gradient(90deg, #f87171, #fb7185); }
  .subagent .meter-fill { background: linear-gradient(90deg, #22c55e, #86efac); }
  .context-card-foot { align-items: flex-start; flex-direction: column; gap: 3px; }
  .context-card-foot strong { font-family: var(--font-mono); font-size: 0.86rem; color: var(--color-neutral-light); }
  .context-card-foot span { font-size: 0.75rem; color: var(--color-neutral-light); opacity: 0.56; line-height: 1.45; }

  .handoff-line { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.7rem; color: #93c5fd; opacity: 0.8; }
  .handoff-dot { width: 7px; height: 7px; border-radius: 50%; background: #60a5fa; box-shadow: 0 0 8px rgba(96, 165, 250, 0.75); flex-shrink: 0; }

  .mission-box { display: flex; flex-direction: column; gap: var(--spacing-sm); background: rgba(134, 239, 172, 0.06); border: 1px solid rgba(134, 239, 172, 0.25); border-radius: var(--radius-sm); padding: var(--spacing-md); }
  .mission-label { font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #86efac; }
  .mission-box strong { font-size: 0.84rem; line-height: 1.5; color: var(--color-neutral-light); font-weight: 500; }

  .evidence-chip { background: rgba(96, 165, 250, 0.06); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: var(--radius-sm); padding: var(--spacing-md); font-family: var(--font-mono); font-size: 0.78rem; color: var(--color-electric); opacity: 0.75; line-height: 1.5; }

  .intro-row { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--spacing-2xl); align-items: center; }
  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }
  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-md); }
  .image-pair { display: grid; grid-template-columns: 0.75fr 1.25fr; gap: var(--spacing-sm); align-items: stretch; }
  .image-tile { min-width: 0; margin: 0; padding: var(--spacing-xs); display: flex; flex-direction: column; justify-content: space-between; gap: var(--spacing-xs); background: rgba(10, 22, 40, 0.42); border: 1px solid rgba(96, 165, 250, 0.15); border-radius: var(--radius-md); }
  .image-tile img { width: 100%; height: 126px; display: block; border-radius: var(--radius-sm); object-fit: contain; margin: 0 auto; }
  .image-caption { font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-electric); opacity: 0.68; text-align: center; }
  .image-tile-context { border-color: rgba(134, 239, 172, 0.25); }
  .image-tile-context .image-caption { color: #86efac; }

  @keyframes meterIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }

  @media (max-width: 900px) {
    .slide-content { padding-top: 2.5rem; gap: 1.1rem; }
    .two-col, .intro-row, .context-grid { grid-template-columns: 1fr; }
    .compare-heading { align-items: flex-start; flex-direction: column; gap: var(--spacing-sm); }
    .compare-note { max-width: none; text-align: left; }
    .image-tile img { height: 118px; }
    .context-card { padding: 0.8rem 1rem; }
    .context-compare { gap: 0.75rem; }
  }
</style>
