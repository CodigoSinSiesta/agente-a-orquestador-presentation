<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const files = [
    { name: 'AGENTS.md', desc: 'La constitución del sistema — qué hace, qué no toca, cómo se valida.' },
    { name: 'init.sh', desc: 'Bootstrap reproducible del entorno de trabajo.' },
    { name: 'featurelist.json', desc: 'El backlog en formato que el agente puede recorrer sin ambigüedad.' },
    { name: 'progress/', desc: 'Estado externalizado — qué se hizo, qué falta, por sesión.' },
    { name: 'leader / implementer / reviewer', desc: 'Roles fijos: quien planifica, quien ejecuta, quien verifica.' }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto III · Harness</span></div>
    <h2 class="title">¿Qué escribes el <span class="hl">lunes</span>?</h2>
    <p class="lead">No hace falta una plataforma. El arnés mínimo cabe en 5 piezas de texto plano — lo demás lo resuelve el agente contra ellas.</p>

    <div class="files-grid">
      {#each files as f}
        <div class="file-card">
          <span class="file-name">{f.name}</span>
          <span class="file-desc">{f.desc}</span>
        </div>
      {/each}
    </div>

    <div class="evidence-chip">La lección de la bitter lesson ya se aplica aquí: estas piezas no codifican el "cómo" paso a paso — solo el "qué" y los guardrails. El agente resuelve el cómo contra documentación viva.</div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1100px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #fcd34d; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 6px rgba(245, 158, 11, 0.6); }

  .title { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #f59e0b, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.7; line-height: 1.7; max-width: 760px; margin-bottom: 0; }

  .files-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-lg); }
  .file-card { background: rgba(30, 58, 138, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: var(--radius-md); padding: var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-sm); transition: border-color var(--transition-base), background var(--transition-base); }
  .file-card:hover { border-color: rgba(245, 158, 11, 0.5); background: rgba(245, 158, 11, 0.05); }
  .file-name { font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: #fcd34d; }
  .file-desc { font-size: 0.82rem; color: var(--color-neutral-light); opacity: 0.65; line-height: 1.5; }

  .evidence-chip { background: rgba(96, 165, 250, 0.06); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: var(--radius-sm); padding: var(--spacing-md) var(--spacing-lg); font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-electric); opacity: 0.75; line-height: 1.55; }

  @media (max-width: 700px) { .files-grid { grid-template-columns: 1fr; } }
</style>
