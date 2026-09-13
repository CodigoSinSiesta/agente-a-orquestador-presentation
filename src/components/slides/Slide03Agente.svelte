<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="concept-badge"><span class="badge-num">Acto I · 01</span><span class="badge-emoji">🤖</span></div>
    <h2 class="title">Un agente es un <span class="hl">bucle</span>, no un autocompletado</h2>

    <div class="two-col">
      <div class="col-a">
        <h3 class="col-title col-title-a">El bucle mínimo</h3>
        <div class="loop-diagram">
          <div class="d-box"><span class="d-label">THOUGHT</span><span class="d-desc">razona sobre el estado actual</span></div>
          <div class="d-arrow">→</div>
          <div class="d-box"><span class="d-label">ACTION</span><span class="d-desc">ejecuta una tool</span></div>
          <div class="d-arrow">→</div>
          <div class="d-box"><span class="d-label">OBSERVATION</span><span class="d-desc">lee el resultado real</span></div>
        </div>
        <p>ReAct (Yao et al., 2022). El agente decide su siguiente paso mirando el resultado del anterior — no genera todo el plan de una sentada.</p>
      </div>

      <div class="col-b">
        <h3 class="col-title col-title-b">El system prompt es la personalidad</h3>
        <p>No es "prompt engineering" de un solo turno: es la constitución del agente durante toda la sesión — qué prioriza, qué no toca, cómo pide ayuda.</p>
        <div class="evidence-chip">Cuanto más ambiguo el system prompt, más varianza entre ejecuciones del mismo agente sobre la misma tarea.</div>
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

  .two-col { display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--spacing-2xl); align-items: start; }
  .col-a, .col-b { display: flex; flex-direction: column; gap: var(--spacing-lg); }

  .col-title { font-size: 1rem; font-weight: 700; margin-bottom: var(--spacing-md); font-family: var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; }
  .col-title-a { color: #86efac; }
  .col-title-b { color: var(--color-electric); }

  .col-a p, .col-b p { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }

  .loop-diagram {
    display: flex; flex-wrap: wrap; align-items: center; gap: var(--spacing-md);
    background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: var(--radius-md); padding: var(--spacing-lg);
  }
  .d-box { flex: 1; min-width: 130px; display: flex; flex-direction: column; gap: 4px; background: rgba(30, 58, 138, 0.3); border-radius: var(--radius-sm); padding: var(--spacing-md); border: 1px solid rgba(96, 165, 250, 0.15); }
  .d-label { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; color: #86efac; }
  .d-desc { font-size: 0.75rem; color: var(--color-neutral-light); opacity: 0.55; line-height: 1.4; }
  .d-arrow { font-size: 1.5rem; color: rgba(34, 197, 94, 0.5); flex-shrink: 0; }

  .evidence-chip { background: rgba(96, 165, 250, 0.06); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: var(--radius-sm); padding: var(--spacing-md); font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-electric); opacity: 0.75; line-height: 1.5; }

  @media (max-width: 900px) { .two-col { grid-template-columns: 1fr; } .loop-diagram { flex-direction: column; align-items: stretch; } .d-arrow { text-align: center; transform: rotate(90deg); } }
</style>
