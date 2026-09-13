<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const limits = [
    'Un agente único acumula todo el contexto de la tarea, aunque solo una parte sea relevante en cada momento.',
    'No puede trabajar dos frentes en paralelo sin mezclar sus razonamientos.',
    'Un system prompt genérico rinde peor que uno especializado para cada tipo de sub-tarea.'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="concept-badge"><span class="badge-num">Acto I · 04</span><span class="badge-emoji">🧩</span></div>
    <h2 class="title">El sub-agente: <span class="hl">delegar</span>, no clonar</h2>

    <div class="intro-row">
      <p class="lead">Como una fila de hormigas: la misma especie, la misma fuerza base — pero cada una carga algo distinto porque la tarea de turno lo pide, no porque haya cinco tipos de hormiga.</p>
      <div class="image-frame">
        <img src={base + 'subagente-hormigas.png'} alt="Una fila de hormigas idénticas, cada una cargando un objeto distinto — la misma base, tareas especializadas" loading="lazy" />
      </div>
    </div>

    <div class="two-col">
      <div class="col-a">
        <h3 class="col-title col-title-a">Límites del agente único</h3>
        <ul class="limit-list">
          {#each limits as l}
            <li>{l}</li>
          {/each}
        </ul>
      </div>
      <div class="col-b">
        <h3 class="col-title col-title-b">Cuándo compensa un sub-agente</h3>
        <p>Cuando la sub-tarea tiene un contexto propio que no necesita contaminar el hilo principal: una búsqueda exploratoria, una revisión de código, una investigación de una API externa.</p>
        <div class="evidence-chip">Regla práctica: si el resultado de la sub-tarea cabe en un resumen de 3-5 líneas, delega. Si necesitas todo el razonamiento intermedio, no delegues.</div>
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

  .limit-list { list-style: none; display: flex; flex-direction: column; gap: var(--spacing-md); margin: 0; padding: 0; }
  .limit-list li { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.6; padding-left: var(--spacing-lg); position: relative; }
  .limit-list li::before { content: '×'; position: absolute; left: 0; color: #f87171; font-weight: 800; }

  .evidence-chip { background: rgba(96, 165, 250, 0.06); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: var(--radius-sm); padding: var(--spacing-md); font-family: var(--font-mono); font-size: 0.78rem; color: var(--color-electric); opacity: 0.75; line-height: 1.5; }

  .intro-row { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--spacing-2xl); align-items: center; }
  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }
  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-md); }
  .image-frame img { width: 100%; height: auto; display: block; border-radius: var(--radius-md); max-height: 220px; object-fit: contain; margin: 0 auto; }

  @media (max-width: 900px) { .two-col, .intro-row { grid-template-columns: 1fr; } }
</style>
