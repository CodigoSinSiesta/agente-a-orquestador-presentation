<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const sources = [
    {
      key: 'anthropic',
      name: 'Anthropic',
      role: 'El laboratorio que entrena Claude',
      cite: '"Building Effective Agents" — Erik Schluntz & Barry Zhang',
      url: 'https://www.anthropic.com/research/building-effective-agents'
    },
    {
      key: 'openai',
      name: 'Ryan Lopopolo',
      role: 'Applied AI · OpenAI',
      cite: 'Charla "Harness Engineering" · AI Engineer London',
      url: 'https://www.youtube.com/watch?v=am_oeAoUhew'
    },
    {
      key: 'factory',
      name: 'Factory',
      role: 'Startup de orquestación multi-agente en producción',
      cite: '"The Multi-Agent Architecture That Actually Ships" — Luke Alvoeiro',
      url: 'https://www.youtube.com/watch?v=ow1we5PzK-o'
    },
    {
      key: 'academia',
      name: 'Academia',
      role: 'Tsinghua + Stanford/MIT',
      cite: 'NLAH (arXiv:2603.25723) · Meta-Harness (arXiv:2603.28052)',
      url: 'https://arxiv.org/abs/2603.25723'
    }
  ];

  const principles = [
    'Harness > Modelo',
    'Separar Gen/Eval',
    'Lógica en prompts',
    'Estado externalizado'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="slide-header">
      <div class="act-tag"><span class="tag-dot"></span><span>Acto IV · Lo que no caduca</span></div>
      <h2 class="title">4 fuentes que no se hablan entre sí, <span class="hl">misma conclusión</span></h2>
      <p class="subtitle">Ninguna de las cuatro cita a las otras tres. Llegaron por caminos separados a los mismos 4 principios.</p>
    </div>

    <div class="sources-row">
      {#each sources as s}
        <a href={s.url} target="_blank" rel="noopener noreferrer" class="source-card">
          <span class="source-name">{s.name}</span>
          <span class="source-role">{s.role}</span>
          <span class="source-cite">{s.cite} ↗</span>
        </a>
      {/each}
    </div>

    <div class="matrix-table">
      <div class="matrix-header">
        <div class="mh-cell convergence-col">Principio compartido</div>
        {#each sources as s}<div class="mh-cell">{s.name}</div>{/each}
      </div>
      {#each principles as p}
        <div class="matrix-row">
          <div class="mr-cell convergence-cell"><span class="conv-name">{p}</span></div>
          {#each sources as _}
            <div class="mr-cell source-cell"><span class="check-mark">✓</span></div>
          {/each}
        </div>
      {/each}
    </div>

    <div class="bottom-insight">
      <span class="bi-icon">🎯</span>
      <p>Skills, sub-agentes, orquestadores y SDD concretos cambiarán con cada modelo nuevo. Estos 4 principios — no las herramientas que los implementan hoy — son lo que sí sobrevive.</p>
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1200px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }
  .slide-header { display: flex; flex-direction: column; gap: var(--spacing-sm); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #c4b5fd; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #a78bfa; box-shadow: 0 0 6px rgba(167, 139, 250, 0.6); }

  .title { font-size: clamp(1.6rem, 3.6vw, 2.6rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #a78bfa, #c4b5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .subtitle { font-size: 0.95rem; color: var(--color-neutral-light); opacity: 0.6; margin-bottom: 0; }

  .sources-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-md); }
  .source-card {
    display: flex; flex-direction: column; gap: 4px;
    background: rgba(167, 139, 250, 0.06); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: var(--radius-md);
    padding: var(--spacing-md) var(--spacing-lg); text-decoration: none;
    transition: border-color var(--transition-base), background var(--transition-base);
  }
  .source-card:hover { border-color: rgba(167, 139, 250, 0.5); background: rgba(167, 139, 250, 0.12); }
  .source-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--color-neutral-light); }
  .source-role { font-size: 0.74rem; color: #c4b5fd; opacity: 0.85; line-height: 1.3; }
  .source-cite { font-family: var(--font-mono); font-size: 0.68rem; color: var(--color-electric); opacity: 0.65; line-height: 1.4; margin-top: 2px; }

  .matrix-table { display: grid; grid-template-rows: auto; border: 1px solid rgba(167, 139, 250, 0.2); border-radius: var(--radius-md); overflow: hidden; }
  .matrix-header { display: grid; grid-template-columns: 200px repeat(4, 1fr); background: rgba(167, 139, 250, 0.1); border-bottom: 1px solid rgba(167, 139, 250, 0.2); }
  .mh-cell { padding: var(--spacing-sm) var(--spacing-lg); font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; color: #c4b5fd; border-right: 1px solid rgba(167, 139, 250, 0.1); text-align: center; }
  .mh-cell:first-child { text-align: left; }
  .mh-cell:last-child { border-right: none; }
  .convergence-col { color: rgba(250, 249, 246, 0.5); text-transform: uppercase; }

  .matrix-row { display: grid; grid-template-columns: 200px repeat(4, 1fr); border-bottom: 1px solid rgba(96, 165, 250, 0.06); transition: background var(--transition-fast); }
  .matrix-row:last-child { border-bottom: none; }
  .matrix-row:hover { background: rgba(167, 139, 250, 0.04); }

  .mr-cell { padding: var(--spacing-sm) var(--spacing-lg); border-right: 1px solid rgba(96, 165, 250, 0.06); display: flex; align-items: center; }
  .mr-cell:last-child { border-right: none; }
  .convergence-cell { justify-content: flex-start; }
  .conv-name { font-family: var(--font-body); font-size: 0.85rem; font-weight: 600; color: var(--color-neutral-light); line-height: 1.3; }

  .source-cell { justify-content: center; }
  .check-mark { font-size: 1rem; color: #86efac; }

  .bottom-insight { display: flex; gap: var(--spacing-md); background: rgba(167, 139, 250, 0.07); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: var(--radius-md); padding: var(--spacing-lg) var(--spacing-xl); }
  .bi-icon { font-size: 1.5rem; flex-shrink: 0; }
  .bottom-insight p { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.65; line-height: 1.6; margin-bottom: 0; }

  @media (max-width: 900px) {
    .sources-row { grid-template-columns: 1fr 1fr; }
    .matrix-header, .matrix-row { grid-template-columns: 1fr; }
    .mh-cell, .mr-cell { border-right: none; text-align: left; justify-content: flex-start; }
  }

  @media (max-width: 600px) { .sources-row { grid-template-columns: 1fr; } }
</style>
