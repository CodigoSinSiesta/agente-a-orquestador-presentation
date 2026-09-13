<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-content">
    <div class="act-tag"><span class="tag-dot"></span><span>Acto IV · Horizonte</span></div>
    <h2 class="title">El matiz: el salto es en <span class="hl">resolver</span>, no en mantener</h2>

    <div class="intro-row">
      <p class="lead">Un iceberg: la punta visible es el test que pasa — la señal que premia el benchmark. La masa sumergida es la mantenibilidad que nadie puntúa, y es varias veces más grande que la punta.</p>
      <div class="image-frame">
        <img src={base + 'oracle-iceberg.png'} alt="Un iceberg con un check verde en la punta visible sobre la línea de flotación, y una masa mucho mayor sumergida" loading="lazy" />
      </div>
    </div>

    <div class="two-col">
      <div class="col-a">
        <h3 class="col-title col-title-a">Por qué el salto no borra el problema</h3>
        <p>Un benchmark como SWE-bench puntúa si el parche pasa los tests, sin romper los antiguos. <strong>Cero penalización por mal diseño.</strong> El RL necesita un oracle rápido — y la mantenibilidad no lo tiene: el coste de una mala decisión de arquitectura se mide en semanas, no en segundos.</p>
      </div>
      <div class="col-b">
        <h3 class="col-title col-title-b">Consecuencia práctica</h3>
        <p>Subir la tasa de éxito en una sola pasada no es "permiso para la lights-off factory". Resuelve el problema del enunciado — no garantiza que el código siga siendo fácil de tocar dentro de tres meses.</p>
      </div>
    </div>

    <div class="conclusion-card card-glass">
      <p><strong>Por eso SDD (y el harness en general) siguen pagando hoy.</strong> No porque el one-shot no mejore — porque mejora en el eje equivocado para lo que el andamiaje resuelve. El día en que exista un oracle rápido de mantenibilidad, gran parte de este andamiaje deja de ser necesario. SDD no es el destino: es el puente mientras ese día no llega.</p>
    </div>
  </div>
</div>

<style>
  .swiper-slide { width: 100%; min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; background: var(--color-base-dark); }
  .slide-content { max-width: 1100px; width: 100%; padding: var(--spacing-content); padding-top: 4rem; display: flex; flex-direction: column; gap: var(--spacing-xl); }

  .act-tag { display: flex; align-items: center; gap: var(--spacing-sm); font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #c4b5fd; }
  .tag-dot { width: 7px; height: 7px; border-radius: 50%; background: #a78bfa; box-shadow: 0 0 6px rgba(167, 139, 250, 0.6); }

  .title { font-size: clamp(1.6rem, 3.6vw, 2.6rem); font-weight: 900; color: var(--color-neutral-light); margin-bottom: 0; }
  .hl { background: linear-gradient(135deg, #a78bfa, #c4b5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .intro-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-2xl); align-items: center; }
  .lead { font-size: 1rem; color: var(--color-neutral-light); opacity: 0.72; line-height: 1.7; margin-bottom: 0; }
  .image-frame { background: rgba(30, 58, 138, 0.15); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: var(--radius-lg); padding: var(--spacing-md); }
  .image-frame img { width: 100%; height: auto; display: block; border-radius: var(--radius-md); max-height: 260px; object-fit: contain; margin: 0 auto; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-2xl); align-items: start; }
  .col-title { font-size: 1rem; font-weight: 700; margin-bottom: var(--spacing-md); font-family: var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; }
  .col-title-a { color: #fcd34d; }
  .col-title-b { color: #c4b5fd; }
  .col-a p, .col-b p { font-size: 0.9rem; color: var(--color-neutral-light); opacity: 0.72; line-height: 1.7; margin-bottom: 0; }

  .conclusion-card p { font-size: 0.95rem; color: var(--color-neutral-light); opacity: 0.85; line-height: 1.7; margin-bottom: 0; }

  @media (max-width: 900px) { .two-col, .intro-row { grid-template-columns: 1fr; } }
</style>
