export const slideNames = [
  'hero',
  'mapa',
  'agente',
  'tool-mcp',
  'contexto',
  'subagente',
  'escalera-base',
  'escalera-top',
  'patron-creator-verifier',
  'patron-hitl-hotl',
  'jev-decisiones',
  'harness-ecuacion',
  'harness-arnes-minimo',
  'sdd-bucle',
  'horizonte-oneshot',
  'horizonte-oracle',
  'convergencia-matriz',
  'conclusiones',
  'closing'
] as const;

export type SlideName = (typeof slideNames)[number];

export const slideTitles: Record<SlideName, string> = {
  hero: 'De Agente a Orquestador',
  mapa: 'El mapa del viaje',
  agente: 'Acto I · El agente',
  'tool-mcp': 'La tool y el MCP',
  contexto: 'El contexto se degrada',
  subagente: 'El sub-agente',
  'escalera-base': 'Acto II · Niveles 1–5',
  'escalera-top': 'Niveles 6–10 · Emergencia',
  'patron-creator-verifier': 'El agente no detecta sus errores',
  'patron-hitl-hotl': 'Supervisar sin microgestionar',
  'jev-decisiones': 'Jev y las microdecisiones',
  'harness-ecuacion': 'Acto III · Harness > Modelo',
  'harness-arnes-minimo': 'Reentrar al código',
  'sdd-bucle': 'SDD cierra el loop hoy',
  'horizonte-oneshot': 'Acto IV · El horizonte one-shot',
  'horizonte-oracle': 'El oracle de mantenibilidad',
  'convergencia-matriz': 'Lo que no caduca',
  conclusiones: 'Hacia el 100% agéntico',
  closing: 'Cierre'
};

export const moduleColors: Record<SlideName, string> = {
  hero: '',
  mapa: '',
  agente: '#22c55e',
  'tool-mcp': '#22c55e',
  contexto: '#22c55e',
  subagente: '#22c55e',
  'escalera-base': '#3B82F6',
  'escalera-top': '#3B82F6',
  'patron-creator-verifier': '#3B82F6',
  'patron-hitl-hotl': '#3B82F6',
  'jev-decisiones': '#3B82F6',
  'harness-ecuacion': '#f59e0b',
  'harness-arnes-minimo': '#f59e0b',
  'sdd-bucle': '#f59e0b',
  'horizonte-oneshot': '#a78bfa',
  'horizonte-oracle': '#a78bfa',
  'convergencia-matriz': '#a78bfa',
  conclusiones: '#a78bfa',
  closing: ''
};

export const actLabels: Record<SlideName, string> = {
  hero: '',
  mapa: '',
  agente: 'Acto I · Fundamentos',
  'tool-mcp': 'Acto I · Fundamentos',
  contexto: 'Acto I · Fundamentos',
  subagente: 'Acto I · Fundamentos',
  'escalera-base': 'Acto II · Orquestación',
  'escalera-top': 'Acto II · Orquestación',
  'patron-creator-verifier': 'Acto II · Orquestación',
  'patron-hitl-hotl': 'Acto II · Orquestación',
  'jev-decisiones': 'Acto II · Orquestación',
  'harness-ecuacion': 'Acto III · Harness',
  'harness-arnes-minimo': 'Acto III · Harness',
  'sdd-bucle': 'Acto III · Harness',
  'horizonte-oneshot': 'Acto IV · Horizonte',
  'horizonte-oracle': 'Acto IV · Horizonte',
  'convergencia-matriz': 'Acto IV · Horizonte',
  conclusiones: 'Acto IV · Horizonte',
  closing: ''
};
