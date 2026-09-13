<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const takeaways = [
    { n: '1', text: 'Agente → tool → contexto → sub-agente → orquestador → harness → SDD: cada peldaño existe porque el anterior tiene un límite real, no por moda.' },
    { n: '2', text: 'La arquitectura importa más que el modelo — hoy. Un mismo modelo rinde 6× distinto solo por el harness que lo envuelve.' },
    { n: '3', text: 'Todo el andamiaje que acabas de ver es temporal. Lo permanente son los principios: verificación separada de generación, estado externalizado, lógica en lenguaje natural.' },
    { n: '4', text: 'SDD no es el destino — es el puente mientras el one-shot no es fiable y no existe un oracle rápido de mantenibilidad.' },
    { n: '5', text: 'El 100% agéntico no es "sin humano" — es sin andamiaje manual. El humano se mueve de escribir pasos a definir contratos y verificar resultados.' }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto IV · Conclusiones</span></div>
    <h2 class="title">Hacia el <span class="hl">100% agéntico</span></h2>

    <div class="takeaways-list">
      {#each takeaways as t}
        <div class="takeaway-item">
          <span class="takeaway-num">{t.n}</span>
          <p>{t.text}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 950px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #c4b5fd; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #a78bfa; box-shadow: 0 0 6px rgba(167, 139, 250, 0.6); }

  .title { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #a78bfa, #c4b5fd, #86efac); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .takeaways-list { display: flex; flex-direction: column; gap: var(--spacing-lg); }
  .takeaway-item { display: flex; gap: var(--spacing-lg); align-items: flex-start; background: rgba(167, 139, 250, 0.05); border: 1px solid rgba(167, 139, 250, 0.15); border-radius: var(--radius-md); padding: var(--spacing-lg) var(--spacing-xl); }
  .takeaway-num { font-family: var(--font-mono); font-size: 1.3rem; font-weight: 800; color: #c4b5fd; opacity: 0.6; flex-shrink: 0; min-width: 24px; }
  .takeaway-item p { font-size: 0.95rem; color: var(--color-neutral-light); opacity: 0.8; line-height: 1.6; margin-bottom: 0; }
</style>
