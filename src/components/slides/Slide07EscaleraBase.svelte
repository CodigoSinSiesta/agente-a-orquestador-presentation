<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const arrow = (id: string) => `<marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#93c5fd"/></marker>`;

  const diagrams: Record<number, string> = {
    1: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a1')}</defs>
      <rect x="6" y="28" width="46" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="29" y="41" font-size="7.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Thought</text>
      <rect x="62" y="28" width="46" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="41" font-size="7.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Action</text>
      <rect x="118" y="28" width="46" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="141" y="41" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">Obs.</text>
      <line x1="52" y1="38" x2="61" y2="38" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a1)"/>
      <line x1="108" y1="38" x2="117" y2="38" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a1)"/>
      <path d="M141,48 C141,68 29,68 29,48" fill="none" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a1)"/></svg>`,
    2: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a2')}</defs>
      <rect x="8" y="30" width="66" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="41" y="43" font-size="7.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Intento</text>
      <rect x="96" y="30" width="66" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="129" y="43" font-size="7.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Crítica</text>
      <line x1="74" y1="40" x2="95" y2="40" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a2)"/>
      <path d="M129,50 C129,68 41,68 41,50" fill="none" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a2)"/></svg>`,
    3: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a3')}</defs>
      <rect x="6" y="30" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="27" y="43" font-size="8" fill="#dbeafe" text-anchor="middle" font-family="monospace">A</text>
      <rect x="64" y="30" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="43" font-size="8" fill="#dbeafe" text-anchor="middle" font-family="monospace">B</text>
      <rect x="122" y="30" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="143" y="43" font-size="8" fill="#dbeafe" text-anchor="middle" font-family="monospace">C</text>
      <line x1="48" y1="40" x2="63" y2="40" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a3)"/>
      <line x1="106" y1="40" x2="121" y2="40" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a3)"/></svg>`,
    4: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a4')}</defs>
      <rect x="62" y="6" width="46" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="19" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">Router</text>
      <rect x="4" y="52" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="25" y="65" font-size="8" fill="#dbeafe" text-anchor="middle" font-family="monospace">A</text>
      <rect x="64" y="52" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="65" font-size="8" fill="#dbeafe" text-anchor="middle" font-family="monospace">B</text>
      <rect x="124" y="52" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="145" y="65" font-size="8" fill="#dbeafe" text-anchor="middle" font-family="monospace">C</text>
      <line x1="78" y1="26" x2="27" y2="51" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a4)"/>
      <line x1="85" y1="26" x2="85" y2="51" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a4)"/>
      <line x1="92" y1="26" x2="143" y2="51" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a4)"/></svg>`,
    5: `<svg viewBox="0 0 170 80" width="100%" height="100%"><defs>${arrow('a5')}</defs>
      <rect x="60" y="6" width="50" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="19" font-size="6.5" fill="#dbeafe" text-anchor="middle" font-family="monospace">Orquestador</text>
      <rect x="4" y="52" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="25" y="65" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">W1</text>
      <rect x="64" y="52" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="85" y="65" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">W2</text>
      <rect x="124" y="52" width="42" height="20" rx="4" fill="none" stroke="#3B82F6" stroke-width="1.5"/><text x="145" y="65" font-size="7" fill="#dbeafe" text-anchor="middle" font-family="monospace">W3</text>
      <line x1="76" y1="26" x2="29" y2="51" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a5)" marker-start="url(#a5)"/>
      <line x1="85" y1="26" x2="85" y2="51" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a5)" marker-start="url(#a5)"/>
      <line x1="94" y1="26" x2="141" y2="51" stroke="#60A5FA" stroke-width="1.5" marker-end="url(#a5)" marker-start="url(#a5)"/></svg>`
  };

  const levels = [
    { num: 1, name: 'Single Agent · ReAct', problema: 'Un LLM que solo devuelve una respuesta de una vez, sin poder actuar ni comprobar si acertó.', patron: 'Bucle Thought → Action → Observation: razona, actúa con una tool, mira el resultado real.', tech: 'Yao et al. 2022' },
    { num: 2, name: 'Reflexion', problema: 'El agente repite el mismo error en cada intento porque nunca analiza por qué falló el anterior.', patron: 'Antes de reintentar, escribe una autocrítica del intento previo y la usa para corregir el siguiente.', tech: 'Shinn et al. 2023' },
    { num: 3, name: 'Pipeline Agéntico', problema: 'Un agente generalista mezcla etapas muy distintas — extraer, transformar, validar — sin especializarse en ninguna.', patron: 'Secuencia fija de agentes especializados: A → B → C. La salida de uno es la entrada del siguiente.', tech: 'ETL agéntico · CI/CD agéntico' },
    { num: 4, name: 'Routing', problema: 'El pipeline es fijo: todo input pasa por las mismas etapas, aunque necesite un tratamiento distinto.', patron: 'Un clasificador inicial decide, input a input, a qué agente especializado dirigirlo.', tech: 'Building Effective Agents · Anthropic' },
    { num: 5, name: 'Orchestrator-Workers', problema: 'El router decide una vez, al principio, y no puede replantear el plan con los resultados parciales.', patron: 'Un coordinador descompone la tarea, reparte sub-tareas a workers y agrega sus resultados.', tech: 'Building Effective Agents · Anthropic' }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="slide-header">
      <div class="act-tag"><span class="tag-dot"></span><span>Acto II · Niveles 1–5 · La base</span></div>
      <h2 class="title">El agente aprende a trabajar <span class="hl">con otros</span></h2>
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
