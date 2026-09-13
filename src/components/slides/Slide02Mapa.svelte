<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="slide-header">
      <p class="label">El ritmo vertiginoso</p>
      <h2 class="title">Solo podemos llegar a cómo se trabaja hoy</h2>
      <p class="subtitle">4 actos, un mismo viaje: cada peldaño existe porque el anterior tiene un límite. Y el último peldaño te dice que el andamiaje entero es temporal.</p>
    </div>

    <div class="image-frame">
      <img src={base + 'escalera-nubes.png'} alt="Una escalera ascendiendo desde peldaños nítidos hacia una niebla luminosa — el viaje de este mismo mapa" loading="lazy" />
    </div>

    <div class="acts-grid">
      <div class="act-card act-1">
        <div class="act-header"><span class="act-badge">I</span><span class="act-name">Fundamentos</span></div>
        <p class="act-desc">Agente, tool / MCP, contexto, sub-agente. Los bloques mínimos antes de poder hablar de orquestar nada.</p>
        <div class="act-tesis"><span class="tesis-label">Tesis</span><span>Un agente solo no escala — necesita herramientas y memoria de trabajo.</span></div>
      </div>

      <div class="act-card act-2">
        <div class="act-header"><span class="act-badge">II</span><span class="act-name">Orquestación</span></div>
        <p class="act-desc">La escalera de 10 niveles, de ReAct a Missions. Y los 2 dolores reales que justifican subir cada peldaño.</p>
        <div class="act-tesis"><span class="tesis-label">Tesis</span><span>La complejidad no es capricho — cada patrón nace de un límite del anterior.</span></div>
      </div>

      <div class="act-card act-3">
        <div class="act-header"><span class="act-badge">III</span><span class="act-name">Harness</span></div>
        <p class="act-desc">Harness y SDD: lo que hace que la orquestación no se caiga a la primera sesión larga.</p>
        <div class="act-tesis"><span class="tesis-label">Tesis</span><span>No es el modelo que eliges. Es cómo lo envuelves — y cómo especificas lo que esperas de él.</span></div>
      </div>

      <div class="act-card act-4">
        <div class="act-header"><span class="act-badge">IV</span><span class="act-name">Horizonte</span></div>
        <p class="act-desc">Los últimos resultados de capacidad one-shot, y por qué todo lo anterior es un puente, no un destino.</p>
        <div class="act-tesis"><span class="tesis-label">Tesis</span><span>Lo único que sobrevive al siguiente salto de modelo son los principios — no las herramientas concretas.</span></div>
      </div>
    </div>

    <p class="label label-bottom">Slides 3–18 ↓</p>
  </div>
</div>

<style>
  .swiper-slide {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-base-dark);
  }

  .slide-content {
    max-width: 1200px;
    width: 100%;
    padding: var(--spacing-content);
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
  }

  .slide-header { text-align: center; }

  .label {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
  }

  .label-bottom { text-align: center; opacity: 0.4; margin-top: 0; }

  .title {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-md);
  }

  .subtitle {
    font-size: 1.05rem;
    color: var(--color-neutral-light);
    opacity: 0.65;
    margin-bottom: 0;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .image-frame {
    background: rgba(30, 58, 138, 0.12);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--spacing-sm);
  }
  .image-frame img { width: 100%; height: auto; max-height: 200px; object-fit: cover; display: block; border-radius: var(--radius-md); }

  .acts-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }

  .act-card {
    background: rgba(30, 58, 138, 0.1);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    border: 1px solid transparent;
    transition: border-color var(--transition-base), background var(--transition-base);
  }

  .act-1 { border-color: rgba(34, 197, 94, 0.25); }
  .act-2 { border-color: rgba(59, 130, 246, 0.25); }
  .act-3 { border-color: rgba(245, 158, 11, 0.25); }
  .act-4 { border-color: rgba(167, 139, 250, 0.25); }

  .act-1:hover { background: rgba(34, 197, 94, 0.07); border-color: rgba(34, 197, 94, 0.5); }
  .act-2:hover { background: rgba(59, 130, 246, 0.07); border-color: rgba(59, 130, 246, 0.5); }
  .act-3:hover { background: rgba(245, 158, 11, 0.07); border-color: rgba(245, 158, 11, 0.5); }
  .act-4:hover { background: rgba(167, 139, 250, 0.07); border-color: rgba(167, 139, 250, 0.5); }

  .act-header { display: flex; align-items: center; gap: var(--spacing-md); }

  .act-badge {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  .act-1 .act-badge { background: rgba(34, 197, 94, 0.2); color: #86efac; }
  .act-2 .act-badge { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
  .act-3 .act-badge { background: rgba(245, 158, 11, 0.2); color: #fcd34d; }
  .act-4 .act-badge { background: rgba(167, 139, 250, 0.2); color: #c4b5fd; }

  .act-name {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .act-desc {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    line-height: 1.55;
    margin-bottom: 0;
    flex: 1;
  }

  .act-tesis {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.6;
    font-style: italic;
    line-height: 1.4;
    padding-top: var(--spacing-sm);
    border-top: 1px solid rgba(96, 165, 250, 0.1);
  }

  .tesis-label {
    font-style: normal;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-electric);
    opacity: 1;
  }

  @media (max-width: 900px) {
    .acts-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 600px) {
    .acts-grid { grid-template-columns: 1fr; }
  }
</style>
