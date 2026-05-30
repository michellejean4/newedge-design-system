import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors, semantic, typography, spacing, radius, elevation } from '../tokens/tokens';

const meta: Meta = {
  title: 'Foundations',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
};
export default meta;
type Story = StoryObj;

const wrap: React.CSSProperties = {
  padding: 32,
  fontFamily: "'Inter', system-ui, sans-serif",
  color: '#c5ccdb',
};
const h2: React.CSSProperties = { color: '#f5f7fb', fontWeight: 600, fontSize: 20, margin: '0 0 16px' };
const eyebrow: React.CSSProperties = {
  fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
  textTransform: 'uppercase', color: '#5b8cff', margin: '0 0 4px',
};

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ width: 120 }}>
      <div style={{ height: 56, borderRadius: 8, background: value, border: '1px solid rgba(255,255,255,0.08)' }} />
      <div style={{ marginTop: 6, fontSize: 12, color: '#f5f7fb' }}>{name}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#8892ab' }}>{value}</div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>{children}</div>;
}

export const Colors: Story = {
  render: () => (
    <div style={wrap}>
      <p style={eyebrow}>03 · Foundations</p>
      <h2 style={h2}>Color</h2>

      <p style={eyebrow}>Navy ramp</p>
      <Row>
        {Object.entries(colors.navy).map(([k, v]) => <Swatch key={k} name={`navy/${k}`} value={v} />)}
      </Row>

      <p style={eyebrow}>Accents</p>
      <Row>
        {([['blue', colors.blue], ['green', colors.green], ['red', colors.red], ['amber', colors.amber]] as const).flatMap(
          ([group, ramp]) => Object.entries(ramp).map(([k, v]) => <Swatch key={`${group}-${k}`} name={`${group}/${k}`} value={v} />)
        )}
      </Row>

      <p style={eyebrow}>Status</p>
      <Row>
        {Object.entries(semantic.status).map(([k, v]) => <Swatch key={k} name={`status/${k}`} value={v} />)}
      </Row>

      <p style={eyebrow}>Data visualization</p>
      <Row>
        {semantic.dataViz.map((v, i) => <Swatch key={i} name={`dv/${i + 1}`} value={v} />)}
      </Row>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={wrap}>
      <p style={eyebrow}>04 · Foundations</p>
      <h2 style={h2}>Typography</h2>
      <p style={{ color: '#8892ab', marginTop: 0 }}>
        Inter for interface, headings, and body. JetBrains Mono for tickers, timestamps, and figures.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
        {Object.entries(typography.scale).map(([key, t]) => (
          <div key={key} style={{ display: 'flex', gap: 24, alignItems: 'baseline', borderTop: '1px solid #1a2239', paddingTop: 16 }}>
            <div style={{ width: 160, flexShrink: 0 }}>
              <div style={{ color: '#f5f7fb', fontSize: 13, fontWeight: 600 }}>{key}</div>
              <div style={{ color: '#8892ab', fontSize: 11 }}>{t.size}px · {t.weight}{'tracking' in t ? ` · ${t.tracking}` : ''}</div>
            </div>
            <div
              style={{
                color: '#f5f7fb',
                fontFamily: key === 'mono' ? "'JetBrains Mono', monospace" : "'Inter', sans-serif",
                fontSize: t.size,
                fontWeight: t.weight,
                letterSpacing: 'tracking' in t ? (t.tracking === '12%' ? '0.12em' : '-0.02em') : undefined,
                textTransform: key === 'eyebrow' ? 'uppercase' : undefined,
              }}
            >
              {key === 'mono' ? 'VTI 14:32:18 ET' : 'Net worth $247.8M'}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={wrap}>
      <p style={eyebrow}>05 · Foundations</p>
      <h2 style={h2}>Space &amp; layout</h2>
      <p style={{ color: '#8892ab', marginTop: 0 }}>4-pt base scale.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
        {Object.entries(spacing).map(([k, v]) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 120, color: '#8892ab', fontSize: 13 }}>space-{k} · {v}</div>
            <div style={{ height: 16, width: v, background: '#2e6bff', borderRadius: 4 }} />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={wrap}>
      <p style={eyebrow}>06 · Foundations</p>
      <h2 style={h2}>Radius</h2>
      <Row>
        {Object.entries(radius).map(([k, v]) => (
          <div key={k} style={{ textAlign: 'center' }}>
            <div style={{ width: 88, height: 64, background: '#141c31', border: '1px solid #2e3a5c', borderRadius: v === 999 ? 999 : v }} />
            <div style={{ marginTop: 8, color: '#f5f7fb', fontSize: 12 }}>r-{k}</div>
            <div style={{ color: '#8892ab', fontSize: 11 }}>{v === 999 ? '999px' : `${v}px`}</div>
          </div>
        ))}
      </Row>
    </div>
  ),
};

export const Elevation: Story = {
  render: () => (
    <div style={{ ...wrap, background: '#05070e' }}>
      <p style={eyebrow}>07 · Foundations</p>
      <h2 style={h2}>Elevation</h2>
      <Row>
        {Object.entries(elevation).map(([k, v]) => (
          <div key={k} style={{ textAlign: 'center' }}>
            <div style={{ width: 140, height: 88, background: '#0f1628', borderRadius: 12, boxShadow: v, border: '1px solid #1a2239', display: 'grid', placeItems: 'center', color: '#8892ab', fontSize: 12 }}>
              {k}
            </div>
          </div>
        ))}
      </Row>
    </div>
  ),
};
