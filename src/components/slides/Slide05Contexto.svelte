<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="concept-badge"><span class="badge-num">Acto I · 03</span><span class="badge-emoji">🧠</span></div>
    <h2 class="title">El contexto se <span class="hl">degrada</span> con la sesión</h2>

    <div class="intro-row">
      <p class="lead">Como una mochila a la que sigues metiendo cosas sin sacar nunca nada: en algún punto la cremallera no aguanta y lo que entra se cae por otro lado — el agente sigue "razonando", pero cargando peso muerto, no la tarea.</p>
      <div class="image-frame">
        <img src={base + 'contexto-mochila.png'} alt="Una mochila desbordada, con la cremallera a punto de reventar y objetos cayéndose — el contexto que ya no cabe" loading="lazy" />
      </div>
    </div>

    <div class="two-col">
      <div class="col-a">
        <h3 class="col-title col-title-a">El dolor</h3>
        <p>Una sesión larga acumula ruido: resultados intermedios, callejones sin salida, herramientas exploradas y descartadas. El agente sigue razonando, pero sobre una ventana cada vez más contaminada.</p>
        <div class="example-box">
          <p class="example-code">Turno 1-20: contexto limpio, foco claro<br />Turno 40+: el agente relee su propio ruido<br />Turno 80+: repite pasos, pierde el objetivo original</p>
        </div>
      </div>
      <div class="col-b">
        <h3 class="col-title col-title-b">Las dos mitigaciones que sí escalan</h3>
        <p><strong>Context isolation</strong>: cada sub-tarea corre en su propia ventana, no hereda el ruido de las anteriores.</p>
        <p><strong>Structured handoffs</strong>: lo que pasa de un agente a otro no es el historial completo — es un resumen con campos fijos (qué se hizo, qué falta, qué se descartó y por qué).</p>
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
  .col-a p, .col-b p { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }

  .example-box { background: rgba(248, 113, 113, 0.07); border: 1px solid rgba(248, 113, 113, 0.25); border-radius: var(--radius-sm); padding: var(--spacing-lg); }
  .example-code { font-family: var(--font-mono); font-size: 0.8rem !important; opacity: 0.8 !important; line-height: 1.8 !important; white-space: pre-wrap; }

  .intro-row { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--spacing-2xl); align-items: center; }
  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }
  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-md); }
  .image-frame img { width: 100%; height: auto; display: block; border-radius: var(--radius-md); max-height: 220px; object-fit: contain; margin: 0 auto; }

  @media (max-width: 900px) { .two-col, .intro-row { grid-template-columns: 1fr; } }
</style>
