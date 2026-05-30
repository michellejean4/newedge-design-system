/**
 * NewEdge Wealth — Design Tokens (TypeScript)
 *
 * Mirrors the CSS custom properties in tokens.css so that documentation
 * pages and tooling can read token values as data. tokens.css remains the
 * source of truth that components actually render against.
 */

export const colors = {
  navy: {
    1000: '#05070e',
    950: '#070b17',
    900: '#0a1020',
    850: '#0f1628',
    800: '#141c31',
    700: '#1a2239',
    600: '#222c46',
    500: '#2e3a5c',
    400: '#3e4a6a',
    300: '#5a6785',
    200: '#8892ab',
    100: '#c5ccdb',
    0: '#f5f7fb',
  },
  blue: { 700: '#163a99', 600: '#1f4fcc', 500: '#2e6bff', 400: '#5b8cff', 300: '#8aadff' },
  green: { 600: '#00a06b', 500: '#00c281', 400: '#2ee0a3' },
  red: { 600: '#e03e52', 500: '#ff5b6e', 400: '#ff8591' },
  amber: { 600: '#d4860a', 500: '#f5a524', 400: '#ffc15e' },
} as const;

export const semantic = {
  bg: { 0: '#05070e', 1: '#0a1020', 2: '#0f1628', 3: '#141c31', 4: '#1a2239', sidebar: '#070b17' },
  text: { 0: '#f5f7fb', 1: '#c5ccdb', 2: '#8892ab', 3: '#5a6785', 4: '#3e4a6a' },
  border: { 0: '#1a2239', 1: '#222c46', 2: '#2e3a5c' },
  status: { positive: '#00c281', negative: '#ff5b6e', warning: '#f5a524', info: '#2e6bff' },
  dataViz: ['#2e6bff', '#22c5e0', '#00c281', '#8b5cf6', '#f5a524', '#e85ca8'],
} as const;

export const typography = {
  families: {
    sans: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  scale: {
    display: { size: 28, weight: 600, tracking: '-2%', note: 'Hero figures' },
    titleL: { size: 20, weight: 600, note: 'Section titles' },
    titleS: { size: 13, weight: 600, note: 'Card titles' },
    body: { size: 13, weight: 400, line: '150%', note: 'Default text' },
    caption: { size: 11, weight: 400, note: 'Timestamps, helper text' },
    eyebrow: { size: 10, weight: 600, tracking: '12%', note: 'UPPERCASE labels' },
    mono: { size: 12, weight: 400, note: 'Tickers, IDs, numeric' },
  },
} as const;

export const spacing = {
  1: 4, 2: 8, 3: 12, 4: 16, 6: 24, 8: 32, 12: 48, 16: 64,
} as const;

export const radius = {
  xs: 4, sm: 6, md: 8, lg: 12, xl: 16, pill: 999,
} as const;

export const elevation = {
  'sh-1': '0 1px 2px rgba(0,0,0,0.40)',
  'sh-2': '0 8px 24px rgba(0,0,0,0.35)',
  'sh-3': '0 24px 64px rgba(0,0,0,0.50)',
  'sh-glow': '0 0 0 3px rgba(46,107,255,0.45)',
} as const;
