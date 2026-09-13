<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const steps = ['Especificar', 'Planificar', 'Ejecutar', 'Verificar'];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto III · Harness</span></div>
    <h2 class="title">SDD cierra el loop <span class="hl">hoy</span></h2>

    <div class="intro-row">
      <p class="lead">Spec-Driven Development: la especificación como artefacto de primera clase, antes que el código. El puente entre TDD y BDD — especialmente cuando delegas la implementación a un agente. Como un plano antes de levantar el muro: el papel es barato de corregir, el muro no.</p>
      <div class="image-frame">
        <img src={base + 'sdd-plano-arquitecto.png'} alt="Un plano arquitectónico con regla y lápiz sobre la mesa — especificar antes de construir" loading="lazy" />
      </div>
    </div>

    <div class="loop-diagram">
      {#each steps as step, i}
        <div class="loop-step"><span class="step-name">{step}</span></div>
        {#if i < steps.length - 1}<div class="loop-arrow">→</div>{/if}
      {/each}
    </div>

    <div class="why-row">
      <div class="why-card"><span class="why-title">Por qué funciona</span><p>La spec reduce la ambigüedad del prompt — es la diferencia entre "arréglalo" y un contrato verificable.</p></div>
      <div class="why-card"><span class="why-title">Por qué no es gratis</span><p>Prototipos rápidos y exploraciones desechables no necesitan spec — se convierte en ceremonia.</p></div>
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1050px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #fcd34d; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 6px rgba(245, 158, 11, 0.6); }

  .title { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #f59e0b, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .intro-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--spacing-2xl); align-items: center; }
  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }
  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-md); }
  .image-frame img { width: 100%; height: auto; display: block; border-radius: var(--radius-md); }

  @media (max-width: 900px) { .intro-row { grid-template-columns: 1fr; } }

  .loop-diagram { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: var(--spacing-md); background: rgba(245, 158, 11, 0.06); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: var(--radius-md); padding: var(--spacing-xl); }
  .loop-step { background: rgba(30, 58, 138, 0.3); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-sm); padding: var(--spacing-md) var(--spacing-xl); }
  .step-name { font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; color: #fcd34d; letter-spacing: 0.04em; }
  .loop-arrow { font-size: 1.3rem; color: rgba(245, 158, 11, 0.5); }

  .why-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
  .why-card { background: rgba(30, 58, 138, 0.1); border-radius: var(--radius-md); padding: var(--spacing-lg); border: 1px solid rgba(96, 165, 250, 0.12); }
  .why-title { display: block; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-electric); margin-bottom: var(--spacing-sm); }
  .why-card p { font-size: 0.88rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.6; margin-bottom: 0; }

  @media (max-width: 700px) { .why-row { grid-template-columns: 1fr; } .loop-diagram { flex-direction: column; } .loop-arrow { transform: rotate(90deg); } }
</style>
