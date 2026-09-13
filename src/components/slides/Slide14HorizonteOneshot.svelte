<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto IV · Horizonte</span></div>
    <h2 class="title">Cada generación sube el <span class="hl">suelo del one-shot</span></h2>
    <p class="lead">Anthropic y el resto de labs siguen subiendo la tasa de éxito en una sola pasada. Y eso cambia qué parte de lo que acabas de ver sigue viva en 12 meses.</p>

    <blockquote class="quote-card card-glass">
      <p>"¿Cómo me aseguro de que el trabajo que hago no quede completamente obsoleto por un aumento en capacidad del modelo? [...] Lo único que sobrevive a la siguiente generación es la capa de contexto y requisitos. Todo lo demás — flujos prescriptivos, scripts de orquestación, plantillas paso a paso — será arrasado por la mejora de capacidad."</p>
      <cite>— Ryan Lopopolo (OpenAI), aplicando la bitter lesson de Rich Sutton a los coding agents</cite>
    </blockquote>

    <div class="anecdote-chip">
      <span class="anecdote-label">Prueba operativa</span>
      <p>Cuando un equipo migró de Chrome DevTools Protocol a un daemon propio, nadie se enteró durante tres semanas: el agente resolvió el "cómo" contra la documentación viva, porque la skill nunca lo tenía hardcodeado.</p>
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1000px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #c4b5fd; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #a78bfa; box-shadow: 0 0 6px rgba(167, 139, 250, 0.6); }

  .title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #a78bfa, #c4b5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; max-width: 760px; margin-bottom: 0; }

  .quote-card { display: flex; flex-direction: column; gap: var(--spacing-md); }
  .quote-card p { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.85; line-height: 1.7; font-style: italic; margin-bottom: 0; }
  .quote-card cite { font-family: var(--font-mono); font-size: 0.78rem; color: #c4b5fd; opacity: 0.8; font-style: normal; }

  .anecdote-chip { background: rgba(167, 139, 250, 0.06); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: var(--radius-md); padding: var(--spacing-lg) var(--spacing-xl); }
  .anecdote-label { display: block; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #c4b5fd; margin-bottom: var(--spacing-sm); }
  .anecdote-chip p { font-size: 0.88rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.6; margin-bottom: 0; }
</style>
