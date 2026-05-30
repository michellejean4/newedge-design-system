import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';

/**
 * This project is a component library; the real experience lives in
 * Storybook (`npm run storybook`). This tiny page just points there.
 */
function App() {
  return (
    <div
      className="ne-root"
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}
    >
      <div>
        <p className="ne-eyebrow">NewEdge Wealth</p>
        <h1 style={{ color: 'var(--ne-text-0)', fontWeight: 600 }}>Design System</h1>
        <p style={{ color: 'var(--ne-text-2)' }}>
          Run <code className="ne-mono">npm run storybook</code> to browse the components.
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
