import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { neDarkTheme } from './theme';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        canvas: { name: 'Canvas (bg-0)', value: '#05070e' },
        surface: { name: 'Surface (bg-1)', value: '#0a1020' },
        light: { name: 'Light', value: '#f5f7fb' },
      },
    },
    docs: { theme: neDarkTheme },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Radius', 'Elevation'],
          'Components',
        ],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'canvas' },
  },
  decorators: [
    (Story) => (
      <div className="ne-root" style={{ padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
