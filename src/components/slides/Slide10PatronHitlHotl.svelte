<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="problem-badge"><span class="badge-num">Dolor 2</span><span class="badge-emoji">🎚️</span></div>
    <h2 class="title">Supervisar sin <span class="hl">microgestionar</span></h2>

    <div class="two-col">
      <div class="col-problem">
        <h3 class="col-title col-title-prob">El dolor</h3>
        <p>Aprobar cada paso mata la velocidad de un sistema agéntico. No aprobar nada te expone a que un orquestador de días de duración se desvíe sin que nadie se entere hasta el final.</p>
        <div class="example-box"><p class="example-code">100% autónomo → riesgo sin frenos<br />100% aprobación manual → sin ganancia de velocidad</p></div>
      </div>

      <div class="col-solution">
        <h3 class="col-title col-title-sol">El patrón: HITL / HOTL</h3>
        <div class="pattern-diagram">
          <div class="d-box d-creator"><span class="d-label">HITL</span><span class="d-desc">Human-in-the-loop · aprueba puntos de decisión irreversibles</span></div>
          <div class="d-arrow">+</div>
          <div class="d-box d-verifier"><span class="d-label">HOTL</span><span class="d-desc">Human-on-the-loop · supervisa métricas, interviene por excepción</span></div>
        </div>
        <p class="solution-why">La autonomía no es binaria: se calibra por el coste de deshacer un error, no por la longitud de la tarea.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1100px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .problem-badge { display: flex; align-items: center; gap: var(--spacing-md); }
  .badge-num { font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #93c5fd; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); padding: 4px 12px; border-radius: 999px; }
  .badge-emoji { font-size: 1.5rem; }

  .title { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #3B82F6, #93c5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-2xl); align-items: start; }
  .col-title { font-size: 1rem; font-weight: 700; margin-bottom: var(--spacing-md); font-family: var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; }
  .col-title-prob { color: #f87171; }
  .col-title-sol { color: #93c5fd; }
  .col-problem, .col-solution { display: flex; flex-direction: column; gap: var(--spacing-lg); }
  .col-problem p, .col-solution p { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }

  .example-box { background: rgba(248, 113, 113, 0.07); border: 1px solid rgba(248, 113, 113, 0.25); border-radius: var(--radius-sm); padding: var(--spacing-lg); }
  .example-code { font-family: var(--font-mono); font-size: 0.8rem !important; opacity: 0.8 !important; line-height: 1.8 !important; white-space: pre-wrap; }

  .pattern-diagram { display: flex; align-items: center; gap: var(--spacing-md); background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-md); padding: var(--spacing-lg); }
  .d-box { flex: 1; display: flex; flex-direction: column; gap: 4px; background: rgba(30, 58, 138, 0.3); border-radius: var(--radius-sm); padding: var(--spacing-md); border: 1px solid rgba(96, 165, 250, 0.15); }
  .d-label { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; color: #93c5fd; }
  .d-desc { font-size: 0.75rem; color: var(--color-neutral-light); opacity: 0.55; line-height: 1.4; }
  .d-arrow { font-size: 1.5rem; color: rgba(59, 130, 246, 0.5); flex-shrink: 0; }

  .solution-why { font-size: 0.875rem !important; opacity: 0.65 !important; }

  @media (max-width: 900px) { .two-col { grid-template-columns: 1fr; } }
</style>
