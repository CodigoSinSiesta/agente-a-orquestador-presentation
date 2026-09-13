<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const primitives = [
    { name: 'Tools', who: 'model-controlled', desc: 'El LLM decide cuándo llamarlas. Funciones que ejecutan acción real.' },
    { name: 'Resources', who: 'app-controlled', desc: 'Datos que el server expone; el humano decide cuándo cargarlos.' },
    { name: 'Prompts', who: 'user-controlled', desc: 'Plantillas de conversación reutilizables, invocadas explícitamente.' }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="concept-badge"><span class="badge-num">Acto I · 02</span><span class="badge-emoji">🔌</span></div>
    <h2 class="title">MCP: el <span class="hl">USB-C</span> de la IA</h2>

    <div class="intro-row">
      <p class="lead">Antes de MCP, cada herramienta IA exponía tools a su manera — fragmentación total. MCP estandariza cómo un agente descubre y usa capacidades externas: un mismo conector, cualquier dispositivo.</p>
      <div class="image-frame">
        <img src={base + 'tool-mcp-conector.png'} alt="Un único conector alimentando una lámpara, un altavoz y un ventilador — el mismo estándar sirviendo a herramientas distintas" loading="lazy" />
      </div>
    </div>

    <div class="primitives-grid">
      {#each primitives as p}
        <div class="prim-card">
          <div class="prim-header"><span class="prim-name">{p.name}</span><span class="prim-who">{p.who}</span></div>
          <p class="prim-desc">{p.desc}</p>
        </div>
      {/each}
    </div>

    <div class="evidence-chip">El control está repartido entre los tres actores: el LLM decide cuándo usar Tools; el humano decide cuándo cargar Resources y Prompts.</div>
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

  .intro-row { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--spacing-2xl); align-items: center; }
  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; margin-bottom: 0; }

  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-md); }
  .image-frame img { width: 100%; height: auto; display: block; border-radius: var(--radius-md); }

  @media (max-width: 900px) { .intro-row { grid-template-columns: 1fr; } }

  .primitives-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-lg); }
  .prim-card { background: rgba(30, 58, 138, 0.1); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: var(--radius-md); padding: var(--spacing-xl); display: flex; flex-direction: column; gap: var(--spacing-sm); transition: border-color var(--transition-base), background var(--transition-base); }
  .prim-card:hover { border-color: rgba(34, 197, 94, 0.5); background: rgba(34, 197, 94, 0.05); }
  .prim-header { display: flex; flex-direction: column; gap: 4px; }
  .prim-name { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--color-neutral-light); }
  .prim-who { font-family: var(--font-mono); font-size: 0.7rem; color: #86efac; opacity: 0.8; text-transform: uppercase; letter-spacing: 0.06em; }
  .prim-desc { font-size: 0.88rem; color: var(--color-neutral-light); opacity: 0.65; line-height: 1.6; margin-bottom: 0; }

  .evidence-chip { background: rgba(96, 165, 250, 0.06); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: var(--radius-sm); padding: var(--spacing-md) var(--spacing-lg); font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-electric); opacity: 0.75; line-height: 1.5; }

  @media (max-width: 900px) { .primitives-grid { grid-template-columns: 1fr; } }
</style>
