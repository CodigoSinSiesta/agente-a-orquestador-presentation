<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto III · Harness</span></div>
    <h2 class="title">No es el modelo. Es cómo lo <span class="hl">envuelves</span></h2>

    <div class="image-frame">
      <img src={base + 'harness-arnes-caballo.png'} alt="Un caballo con arnés, calmado y con dirección, junto al mismo caballo corriendo libre y sin control — el harness como lo que convierte fuerza bruta en trabajo útil" loading="lazy" />
    </div>

    <div class="equation-card card-glass">
      <div class="eq-row">
        <span class="eq-term">Agente</span>
        <span class="eq-op">=</span>
        <span class="eq-term">Modelo</span>
        <span class="eq-op">+</span>
        <span class="eq-term eq-highlight">Harness</span>
      </div>
      <p class="eq-caption">Contexto, tools, memoria y validación — todo lo que rodea al LLM y decide si sus decisiones se convierten en trabajo útil.</p>
    </div>

    <div class="proof-row">
      <div class="proof-item">
        <span class="proof-num">6×</span>
        <span class="proof-label">de diferencia en rendimiento con el mismo modelo, en el mismo benchmark, cambiando solo el harness</span>
      </div>
    </div>

    <div class="evidence-chip">La diferencia ya no la marca el modelo que eliges — la marca lo que construyes alrededor de él.</div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 950px; width: 100%; padding: var(--spacing-content); padding-top: 4.5rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #fcd34d; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 6px rgba(245, 158, 11, 0.6); }

  .title { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #f59e0b, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-sm); }
  .image-frame img { width: 100%; height: auto; display: block; border-radius: var(--radius-md); max-height: 260px; object-fit: cover; }

  .equation-card { display: flex; flex-direction: column; gap: var(--spacing-lg); align-items: center; text-align: center; }
  .eq-row { display: flex; align-items: baseline; gap: var(--spacing-lg); flex-wrap: wrap; justify-content: center; }
  .eq-term { font-family: var(--font-display); font-size: clamp(1.5rem, 3.5vw, 2.4rem); font-weight: 800; color: var(--color-neutral-light); }
  .eq-highlight { background: linear-gradient(135deg, #f59e0b, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .eq-op { font-family: var(--font-mono); font-size: 1.5rem; color: var(--color-electric); opacity: 0.6; }
  .eq-caption { font-size: 0.95rem; color: var(--color-neutral-light); opacity: 0.65; max-width: 560px; margin-bottom: 0; }

  .proof-row { display: flex; justify-content: center; }
  .proof-item { display: flex; flex-direction: column; align-items: center; gap: var(--spacing-sm); text-align: center; max-width: 500px; }
  .proof-num { font-family: var(--font-display); font-size: clamp(3rem, 8vw, 5rem); font-weight: 900; background: linear-gradient(135deg, #f59e0b, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
  .proof-label { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.65; line-height: 1.5; }

  .evidence-chip { background: rgba(245, 158, 11, 0.07); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-sm); padding: var(--spacing-md) var(--spacing-lg); font-family: var(--font-mono); font-size: 0.85rem; color: #fcd34d; opacity: 0.85; line-height: 1.5; text-align: center; }
</style>
