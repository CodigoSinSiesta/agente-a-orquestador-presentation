# De Agente a Orquestador

Presentación interactiva (18 slides, ~50 min) sobre **De agente a orquestador, encauzando hacia el desarrollo 100% agéntico** — la charla "capstone" de Código Sin Siesta para el parque temático.

## Tesis

> No es el modelo que eliges. Es cómo lo envuelves. Y ese envoltorio — sub-agentes, orquestador, harness, SDD — es temporal: lo único que sobrevive al siguiente salto de capacidad son los principios de verificación y contexto.

## Estructura (4 actos, 18 slides)

1. **Hero + Mapa** (slides 1-2)
2. **Acto I · Fundamentos** (slides 3-6) — Agente, Tool/MCP, Contexto, Sub-agente
3. **Acto II · Orquestación** (slides 7-10) — Escalera de 10 niveles, Creator-Verifier, HITL/HOTL
4. **Acto III · Harness** (slides 11-13) — Harness (ecuación + arnés mínimo), SDD
5. **Acto IV · Horizonte** (slides 14-18) — Mejora continua one-shot, oracle de mantenibilidad, convergencia, conclusiones, cierre

## Stack

- **Astro 5** + **Svelte 5** + **TypeScript**
- **Tailwind CSS 4** + tokens del tema visual "dark blueprint" de Código Sin Siesta (recuperados de [orquestacion-patrones-presentation](https://github.com/CodigoSinSiesta/orquestacion-patrones-presentation))
- **GSAP 3** para animaciones de entrada

## Desarrollo

```bash
npm install
npm run dev      # → http://localhost:4330/agente-a-orquestador-presentation
npm run build    # type-check + build estático en dist/
```

## Fuentes del vault

Nota completa con la estructura y la justificación de cada bloque: `agente-a-orquestador-presentation.md` en `🧠 Conocimientos/📊 Proyectos/Codigo sin siesta/` del vault `obsidian-track`.

## Autor

Alejandro de la Fuente · Tech Lead · NTT Data · GDNE
[tellmealex.dev](https://tellmealex.dev) · [GitHub](https://github.com/TellMeAlex) · [LinkedIn](https://es.linkedin.com/in/alejandro-de-la-fuente)
