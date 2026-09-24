<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';

  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const checkpoints = [
    {
      number: '01',
      question: '¿Dónde quedó?',
      source: 'progress/',
      description: 'Decisiones tomadas, evidencia reunida y bloqueos que siguen abiertos.'
    },
    {
      number: '02',
      question: '¿Qué sigue?',
      source: 'featurelist.json',
      description: 'La siguiente tarea, su prioridad y el criterio para darla por cerrada.'
    },
    {
      number: '03',
      question: '¿Con qué reglas?',
      source: 'AGENTS.md  +  init.sh',
      description: 'Límites del proyecto, entorno reproducible y verificaciones antes de entregar.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto III · Harness</span></div>
    <h2 class="title">Reentrar a un código ya <span class="hl">empezado</span></h2>
    <p class="lead">Vuelves al repositorio varios días después. Antes de tocar una línea, el proyecto debe devolverte el estado de trabajo.</p>

    <div class="reentry-flow" aria-label="Puntos de entrada para retomar un proyecto">
      <div class="flow-intro">
        <span class="flow-label">La reentrada</span>
        <p>El contexto persistente evita reconstruir la historia desde el código y desde el chat anterior.</p>
      </div>

      <div class="checkpoint-list">
        {#each checkpoints as checkpoint}
          <div class="checkpoint">
            <span class="checkpoint-number">{checkpoint.number}</span>
            <div class="checkpoint-copy">
              <h3>{checkpoint.question}</h3>
              <p>{checkpoint.description}</p>
            </div>
            <code>{checkpoint.source}</code>
          </div>
        {/each}
      </div>
    </div>

    <div class="handoff-line">
      <span>El estado queda en el proyecto.</span>
      <p>La siguiente sesión empieza con un punto de partida compartido.</p>
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
  .lead { max-width: 760px; margin-bottom: 0; color: var(--color-neutral-light); font-size: 1rem; line-height: 1.7; opacity: 0.72; }

  .reentry-flow { display: grid; grid-template-columns: minmax(210px, 0.76fr) minmax(0, 1.7fr); gap: var(--spacing-2xl); align-items: stretch; padding: var(--spacing-xl); border: 1px solid rgba(245, 158, 11, 0.22); border-radius: var(--radius-lg); background: linear-gradient(110deg, rgba(245, 158, 11, 0.08), rgba(30, 58, 138, 0.10)); }
  .flow-intro { display: flex; flex-direction: column; justify-content: center; gap: var(--spacing-md); padding-right: var(--spacing-xl); border-right: 1px solid rgba(245, 158, 11, 0.22); }
  .flow-label { color: #fcd34d; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
  .flow-intro p { margin: 0; color: var(--color-neutral-light); font-size: 0.98rem; line-height: 1.65; opacity: 0.76; }

  .checkpoint-list { display: flex; flex-direction: column; }
  .checkpoint { display: grid; grid-template-columns: 48px minmax(0, 1fr) max-content; gap: var(--spacing-md); align-items: center; padding: var(--spacing-md) 0; border-bottom: 1px solid rgba(147, 197, 253, 0.14); }
  .checkpoint:first-child { padding-top: 0; }
  .checkpoint:last-child { padding-bottom: 0; border-bottom: 0; }
  .checkpoint-number { color: rgba(252, 211, 77, 0.52); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.04em; }
  .checkpoint-copy h3 { margin: 0 0 0.25rem; color: var(--color-neutral-light); font-size: 1.03rem; font-weight: 800; }
  .checkpoint-copy p { margin: 0; color: var(--color-neutral-light); font-size: 0.84rem; line-height: 1.5; opacity: 0.66; }
  code { padding: 0.38rem 0.55rem; border: 1px solid rgba(96, 165, 250, 0.26); border-radius: 0.35rem; background: rgba(30, 58, 138, 0.27); color: var(--color-electric); font-family: var(--font-mono); font-size: 0.75rem; white-space: nowrap; }

  .handoff-line { display: flex; align-items: baseline; gap: var(--spacing-md); padding: 0 var(--spacing-lg); }
  .handoff-line span { color: #fcd34d; font-family: var(--font-mono); font-size: 0.84rem; font-weight: 700; }
  .handoff-line p { margin: 0; color: var(--color-neutral-light); font-size: 0.9rem; line-height: 1.5; opacity: 0.66; }

  @media (max-width: 780px) {
    .reentry-flow { grid-template-columns: 1fr; gap: var(--spacing-lg); }
    .flow-intro { padding: 0 0 var(--spacing-lg); border-right: 0; border-bottom: 1px solid rgba(245, 158, 11, 0.22); }
    .handoff-line { flex-direction: column; gap: var(--spacing-xs); padding: 0; }
  }

  @media (max-width: 560px) {
    .checkpoint { grid-template-columns: 34px minmax(0, 1fr); }
    code { grid-column: 2; justify-self: start; }
  }
</style>
