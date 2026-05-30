import { create } from 'storybook/theming';

/**
 * NewEdge dark theme for the Storybook UI (sidebar, toolbar, docs).
 * Colors pulled from the NewEdge design tokens.
 */
export const neDarkTheme = create({
  base: 'dark',

  brandTitle: 'NewEdge Wealth — Design System',
  brandUrl: 'https://github.com/',
  brandTarget: '_self',

  // Brand accent
  colorPrimary: '#2e6bff',
  colorSecondary: '#5b8cff',

  // UI surfaces
  appBg: '#05070e',
  appContentBg: '#0a1020',
  appPreviewBg: '#05070e',
  appBorderColor: '#222c46',
  appBorderRadius: 8,

  // Text
  textColor: '#f5f7fb',
  textInverseColor: '#05070e',
  textMutedColor: '#8892ab',

  // Toolbar
  barTextColor: '#8892ab',
  barSelectedColor: '#5b8cff',
  barHoverColor: '#8aadff',
  barBg: '#070b17',

  // Fonts
  fontBase: "'Inter', system-ui, sans-serif",
  fontCode: "'JetBrains Mono', ui-monospace, monospace",

  // Form inputs
  inputBg: '#0f1628',
  inputBorder: '#222c46',
  inputTextColor: '#f5f7fb',
  inputBorderRadius: 8,
});
