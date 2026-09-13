<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const arrow = (id: string) => `<marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#93c5fd"/></marker>`;

  const diagrams: Record<number, string> = {
    6: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a6')}</defs>
      <rect x="6" y="30" width="62" height="22" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="37" y="44" font-size="7.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Creator</text>
      <rect x="100" y="30" width="62" height="22" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="131" y="44" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">Verifier</text>
      <line x1="85" y1="10" x2="85" y2="70" stroke="#60A5FA" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6"/>
      <line x1="68" y1="41" x2="99" y2="41" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a6)"/></svg>`,
    7: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a7')}</defs>
      <rect x="62" y="4" width="46" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="16" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">Root</text>
      <rect x="10" y="34" width="50" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="35" y="46" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Coord.</text>
      <rect x="110" y="34" width="50" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="135" y="46" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Coord.</text>
      <line x1="78" y1="22" x2="40" y2="33" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a7)"/>
      <line x1="92" y1="22" x2="130" y2="33" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a7)"/>
      <line x1="6" y1="66" x2="164" y2="66" stroke="#86efac" stroke-width="1.3" stroke-dasharray="2,3" opacity="0.8"/>
      <text x="85" y="78" font-size="6" fill="#86efac" text-anchor="middle" font-family="monospace" opacity="0.8">broadcast</text></svg>`,
    8: `<svg viewBox="0 0 170 80" width="100%" height="100%">
      <rect x="8" y="8" width="44" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="30" y="20" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">N1</text>
      <rect x="118" y="8" width="44" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="140" y="20" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">N2</text>
      <rect x="8" y="54" width="44" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="30" y="66" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">N3</text>
      <rect x="118" y="54" width="44" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="140" y="66" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">N4</text>
      <line x1="30" y1="26" x2="140" y2="26" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>
      <line x1="30" y1="63" x2="140" y2="63" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>
      <line x1="30" y1="26" x2="30" y2="54" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>
      <line x1="140" y1="26" x2="140" y2="54" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>
      <line x1="30" y1="26" x2="140" y2="63" stroke="#60A5FA" stroke-width="1" opacity="0.5"/>
      <line x1="140" y1="26" x2="30" y2="63" stroke="#60A5FA" stroke-width="1" opacity="0.5"/></svg>`,
    9: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a9')}</defs>
      <rect x="2" y="30" width="48" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="26" y="43" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Worker</text>
      <rect x="62" y="30" width="48" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="86" y="43" font-size="6" fill="#dbeafe" text-anchor="middle" font-family="monospace">Validator</text>
      <rect x="122" y="30" width="46" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="145" y="43" font-size="6" fill="#dbeafe" text-anchor="middle" font-family="monospace">Scrutiny</text>
      <line x1="50" y1="40" x2="61" y2="40" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a9)"/>
      <text x="55" y="32" font-size="8" fill="#86efac" text-anchor="middle">✓</text>
      <line x1="110" y1="40" x2="121" y2="40" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a9)"/>
      <text x="115" y="32" font-size="8" fill="#86efac" text-anchor="middle">✓</text></svg>`,
    10: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a10')}</defs>
      <rect x="60" y="4" width="50" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="16" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Puppeteer</text>
      <rect x="6" y="52" width="42" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="27" y="64" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">A1</text>
      <rect x="64" y="52" width="42" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="64" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">A2</text>
      <rect x="122" y="52" width="42" height="18" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="143" y="64" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">A3</text>
      <line x1="76" y1="22" x2="29" y2="51" stroke="#60A5FA" stroke-width="1.3" marker-end="url(#a10)"/>
      <line x1="85" y1="22" x2="85" y2="51" stroke="#60A5FA" stroke-width="1.3" marker-end="url(#a10)"/>
      <line x1="94" y1="22" x2="141" y2="51" stroke="#60A5FA" stroke-width="1.3" marker-end="url(#a10)"/>
      <path d="M85,51 C110,38 110,18 108,15" fill="none" stroke="#86efac" stroke-width="1.3" stroke-dasharray="2,3" marker-end="url(#a10)"/></svg>`
  };

  const levels = [
    { num: 6, name: 'Creator-Verifier', problema: 'Los workers trabajan en paralelo sin que nadie, con otro punto de vista, revise lo que producen.', patron: 'Quien genera y quien evalúa trabajan en contextos separados — sus puntos ciegos no coinciden.', tech: 'Ver slide dedicada · Acto II' },
    { num: 7, name: 'Hierarchical + Broadcast', problema: 'Con muchos equipos Creator-Verifier en paralelo, un cambio de requisito tarda en llegar a todos.', patron: 'Coordinadores de coordinadores, más un canal de broadcast que avisa a todos los nodos a la vez.', tech: 'Topologías multi-nivel' },
    { num: 8, name: 'Swarm / Mesh', problema: 'La jerarquía fija se convierte en cuello de botella cuando las dependencias cruzan equipos constantemente.', patron: 'Sin jerarquía fija: los agentes se comunican entre sí, directamente, según lo que necesite cada momento.', tech: 'Topologías descentralizadas' },
    { num: 9, name: 'Missions (Factory)', problema: 'Ninguna topología en memoria sobrevive a una tarea que dura más que una sesión de trabajo.', patron: 'Misión de horas o días con roles fijos y checkpoints — cierras el portátil y la retomas luego.', tech: 'Factory — Missions en producción' },
    { num: 10, name: 'Puppeteer / RL', problema: 'Ni con roles fijos ni checkpoints el sistema mejora solo — cada sesión repite los mismos fallos.', patron: 'Un "titiritero" ajusta el comportamiento de los agentes con señales de refuerzo entre sesiones.', tech: 'Frontera de investigación 2026' }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="slide-header">
      <div class="act-tag"><span class="tag-dot"></span><span>Acto II · Niveles 6–10 · Emergencia</span></div>
      <h2 class="title">Del patrón a la <span class="hl">fábrica</span></h2>
    </div>

    <div class="levels-grid">
      {#each levels as level}
        <div class="level-card">
          <div class="level-header"><span class="level-num">{level.num}</span><span class="level-name">{level.name}</span></div>
          <div class="level-diagram">{@html diagrams[level.num]}</div>
          <div class="block block-problema"><span class="block-label">Problema</span><p>{level.problema}</p></div>
          <div class="block block-patron"><span class="block-label">Patrón</span><p>{level.patron}</p></div>
          <div class="level-footer"><div class="tech-tag">{level.tech}</div></div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1280px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }
  .slide-header { display: flex; flex-direction: column; gap: var(--spacing-md); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #93c5fd; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #3B82F6; box-shadow: 0 0 6px rgba(59, 130, 246, 0.6); }

  .title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #3B82F6, #93c5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .levels-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: var(--spacing-lg); }

  .level-card { background: rgba(30, 58, 138, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-md); padding: var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-sm); transition: border-color var(--transition-base), background var(--transition-base); }
  .level-card:hover { border-color: rgba(59, 130, 246, 0.5); background: rgba(59, 130, 246, 0.05); }

  .level-header { display: flex; align-items: center; gap: var(--spacing-md); }
  .level-num { width: 30px; height: 30px; border-radius: var(--radius-sm); background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; color: #93c5fd; flex-shrink: 0; }
  .level-name { font-family: var(--font-display); font-size: 0.98rem; font-weight: 700; color: var(--color-neutral-light); }

  .level-diagram { background: rgba(10, 22, 40, 0.5); border: 1px solid rgba(96, 165, 250, 0.12); border-radius: var(--radius-sm); height: 72px; display: flex; align-items: center; justify-content: center; overflow: hidden; }

  .block { display: flex; flex-direction: column; gap: 2px; }
  .block-label { font-family: var(--font-mono); font-size: 0.64rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
  .block-problema .block-label { color: #f87171; opacity: 0.9; }
  .block-patron .block-label { color: #86efac; opacity: 0.9; }
  .block p { font-size: 0.8rem; color: var(--color-neutral-light); opacity: 0.72; line-height: 1.45; margin-bottom: 0; }

  .level-footer { padding-top: var(--spacing-xs); border-top: 1px solid rgba(96, 165, 250, 0.1); }
  .tech-tag { font-family: var(--font-mono); font-size: 0.68rem; color: var(--color-electric); opacity: 0.5; }

  @media (max-width: 900px) { .levels-grid { grid-template-columns: 1fr; } }
</style>
