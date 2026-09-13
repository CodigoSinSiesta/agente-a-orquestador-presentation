<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>
  <div class="animated-grid"></div>

  <div class="slide-content">
    <h1 class="closing-title">
      El andamiaje caduca.<br />
      Los principios,<br />
      <span class="hl">no.</span>
    </h1>

    <div class="links-section">
      <div class="links-col">
        <p class="links-heading"><span class="links-icon">▶</span> De esta misma serie</p>
        <ul class="links-list">
          <li><a href="https://codigosinsiesta.github.io/orquestacion-patrones-presentation/" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-blue">Deck</span><span class="link-text">Patrones de Orquestación — la escalera completa de 10 niveles</span></a></li>
          <li><a href="https://codigosinsiesta.github.io/harness-engineering-presentation/" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-amber">Deck</span><span class="link-text">Harness Engineering — el gap del 6× en profundidad</span></a></li>
          <li><a href="https://codigosinsiesta.github.io/spec-driven-development-presentation/" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-amber">Deck</span><span class="link-text">Spec-Driven Development — los 3 niveles de Böckeler</span></a></li>
          <li><a href="https://codigosinsiesta.github.io/subagents-skills-presentation/" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-green">Deck</span><span class="link-text">Subagentes y Skills — sinergia y gestión de contexto</span></a></li>
        </ul>
      </div>

      <div class="links-col">
        <p class="links-heading"><span class="links-icon">◎</span> El argumento del Acto IV</p>
        <ul class="links-list">
          <li><a href="https://www.youtube.com/watch?v=am_oeAoUhew" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-violet">Charla</span><span class="link-text">Ryan Lopopolo — Harness Engineering Q&A, la bitter lesson aplicada a agentes</span></a></li>
          <li><a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-violet">Ensayo</span><span class="link-text">Rich Sutton — The Bitter Lesson (2019)</span></a></li>
          <li><a href="https://www.anthropic.com/research/building-effective-agents" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-violet">Anthropic</span><span class="link-text">Building Effective Agents — los patrones canónicos del Acto II</span></a></li>
        </ul>
      </div>

      <div class="links-col">
        <p class="links-heading"><span class="links-icon">▷</span> Pruébalo</p>
        <ul class="links-list">
          <li><a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-green">Tool</span><span class="link-text">Claude Code — agente CLI con herramientas reales</span></a></li>
          <li><a href="https://agents.md" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-green">Estándar</span><span class="link-text">AGENTS.md — el fichero del arnés mínimo</span></a></li>
          <li><a href="https://github.com/CodigoSinSiesta" target="_blank" rel="noopener noreferrer" class="link-item"><span class="link-tag tag-green">GitHub</span><span class="link-text">Código Sin Siesta — todo el catálogo, licencia MIT</span></a></li>
        </ul>
      </div>
    </div>

    <div class="author-card card-glass">
      <img src="https://www.gravatar.com/avatar/8461e0b8674185c1df153079e820504b?s=120" alt="Alejandro de la Fuente" class="author-avatar" />
      <div class="author-info">
        <p class="author-name">Alejandro de la Fuente</p>
        <p class="author-role">Tech Lead · NTT Data · GDNE</p>
        <div class="author-links">
          <a href="https://tellmealex.dev" target="_blank" rel="noopener noreferrer" class="author-link">tellmealex.dev</a>
          <span class="author-sep">·</span>
          <a href="https://github.com/TellMeAlex" target="_blank" rel="noopener noreferrer" class="author-link">@TellMeAlex</a>
        </div>
      </div>
    </div>
  </div>

  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
</div>

<style>
  .swiper-slide { position: relative; width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }

  .slide-background { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 70%, rgba(167, 139, 250, 0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 25%, rgba(34, 197, 94, 0.07) 0%, transparent 55%); z-index: 1; }
  .animated-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(167, 139, 250, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 139, 250, 0.05) 1px, transparent 1px); background-size: 60px 60px; z-index: 0; animation: moveGrid 30s linear infinite; }

  .slide-content { position: relative; z-index: 2; max-width: 1100px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; align-items: flex-start; gap: var(--spacing-xl); }

  .closing-title { font-size: clamp(2rem, 4.5vw, 3.8rem); font-weight: 900; line-height: 1.15; color: var(--color-neutral-light); animation: fadeUp 0.7s ease-out 0.1s backwards; margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #86efac 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .links-section { width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-lg); animation: fadeUp 0.7s ease-out 0.15s backwards; }
  .links-col { background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(148, 163, 184, 0.1); border-radius: var(--radius-md); padding: var(--spacing-lg) var(--spacing-xl); display: flex; flex-direction: column; gap: var(--spacing-md); }
  .links-heading { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-neutral-light); opacity: 0.4; margin-bottom: 0; display: flex; align-items: center; gap: var(--spacing-sm); }
  .links-icon { opacity: 0.5; }
  .links-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--spacing-sm); }
  .link-item { display: flex; align-items: flex-start; gap: var(--spacing-sm); text-decoration: none; padding: 6px 0; border-bottom: 1px solid rgba(148, 163, 184, 0.06); transition: opacity var(--transition-fast); }
  .link-item:last-child { border-bottom: none; }
  .link-item:hover { opacity: 0.8; }
  .link-tag { font-family: var(--font-mono); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 6px; border-radius: 999px; flex-shrink: 0; margin-top: 1px; }
  .tag-green { color: #86efac; background: rgba(134, 239, 172, 0.12); border: 1px solid rgba(134, 239, 172, 0.25); }
  .tag-blue { color: #93c5fd; background: rgba(147, 197, 253, 0.1); border: 1px solid rgba(147, 197, 253, 0.25); }
  .tag-amber { color: #fcd34d; background: rgba(252, 211, 77, 0.1); border: 1px solid rgba(252, 211, 77, 0.2); }
  .tag-violet { color: #c4b5fd; background: rgba(196, 181, 253, 0.1); border: 1px solid rgba(196, 181, 253, 0.2); }
  .link-text { font-size: 0.8rem; color: var(--color-neutral-light); opacity: 0.65; line-height: 1.4; }

  .author-card { display: flex; align-items: center; gap: var(--spacing-lg); padding: var(--spacing-lg) var(--spacing-xl); animation: fadeUp 0.7s ease-out 0.2s backwards; }
  .author-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .author-name { font-size: 1rem; font-weight: 700; color: var(--color-neutral-light); margin-bottom: 2px; }
  .author-role { font-size: 0.82rem; color: var(--color-electric); font-family: var(--font-mono); opacity: 0.7; margin-bottom: 4px; }
  .author-links { display: flex; gap: var(--spacing-sm); align-items: center; }
  .author-link { font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-electric); text-decoration: none; opacity: 0.6; transition: opacity var(--transition-fast); }
  .author-link:hover { opacity: 1; }
  .author-sep { color: var(--color-electric); opacity: 0.3; }

  .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .orb-1 { width: 400px; height: 400px; background: rgba(167, 139, 250, 0.07); top: -50px; right: -100px; animation: floatOrb 14s ease-in-out infinite; }
  .orb-2 { width: 300px; height: 300px; background: rgba(34, 197, 94, 0.05); bottom: 0; left: -50px; animation: floatOrb 10s ease-in-out infinite reverse; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes moveGrid { 0% { transform: translate(0, 0); } 100% { transform: translate(60px, 60px); } }
  @keyframes floatOrb { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-25px) scale(1.04); } }

  @media (max-width: 1100px) { .links-section { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 900px) { .closing-title { font-size: clamp(2.2rem, 10vw, 3.5rem); } .links-section { grid-template-columns: 1fr; } }
</style>
